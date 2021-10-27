//grid information
var gridNumRows = 10;
var gridCellSize = 35;

//offsets
var borderOffset = 15;

//stores bowditch curve progress
var curveMovement = 0;
var curveIterations = 20;
var curveParticles = [];
var curveAmplitude = 170;

function setup() {

	//set colours
	fill(255);
	background(0);

	//setup canvas
	var canvas = createCanvas(440, 418);

	//render to div with ID "render"
	canvas.parent("render");
}

function draw() {

	//set colours
	fill(255);

	//setup grid
	setupGridBackdrop();
	setupGrid();

	//bowditch curve
	drawCurve();
}

//this function serves as a container and function pointer for individual curve path objects ("particles")
function ParticleProvider(x, y, particleShift) {

	//x-coordinate of particle
	this.x = x;

	//y-coordinate of particle
	this.y = y;

	//movement of particle
	this.curveMovement = particleShift;

	//function used to initiate particle visibility functions
	this.drawParticle = function(currentShift) {

		//calculates the particle shift amount
		var fadeRatio = particleShift / currentShift;

		//over time, individual points will fade; handled by mapping the ration to an alpha mask
		alphaMask = map(fadeRatio, 0, 1, 0, 255);

		//reassign a new fill (with the particle's alpha mask applied)
		fill(200, 200, 200, alphaMask);

		//draw the particle
		ellipse(x, y, 5, 5);
	}
}

function drawCurve() {

	//origin points for curve
	var originX = ((gridNumRows * gridCellSize) / 2) + (borderOffset * 2);
	var originY = (((gridNumRows * gridCellSize)) / 2) + (borderOffset * 2);

	//bowditch curve positions
	var y = originX + (curveAmplitude * sin((3 * curveMovement) + (PI / 2)));
	var x = originY + (curveAmplitude * sin(1 * curveMovement));

	//push an individual particle to the bowditch curve path array
	curveParticles.push(new ParticleProvider(x, y, curveMovement));

	//go through each particle in the curve particles array
	for (i = 0; i < curveParticles.length; i++)

		//execute particle show
		curveParticles[i].drawParticle(curveMovement);

	//it's imporotant to oshift the array when it reaches its capcity
	if (curveParticles.length > 600)

		//shift the path array over
		curveParticles.shift();
	

	//increase bowditch progression
	curveMovement += .01;

}

function setupGrid() {

	//required coordinates
	var startHorDrawX = borderOffset * 2;
	var endHorDrawX = (borderOffset * 2) + (gridNumRows * gridCellSize);
	var currentVerDrawX = startHorDrawX;
	var currentHorDrawY = (borderOffset * 2);
	var startVerDrawY = currentHorDrawY;
	var endVerDrawY = startVerDrawY + (gridNumRows * gridCellSize);

	//setup stroke
	stroke(0);
	strokeWeight(1);

	//begin horizontal line drawing
	for (var i = 0; i < gridNumRows + 1; i++) {

		//draw new line
		line(startHorDrawX, currentHorDrawY, endHorDrawX, currentHorDrawY);

		//increment y-counter
		currentHorDrawY += gridCellSize;
	}

	//begin vertical line drawing
	for (var i = 0; i < gridNumRows + 1; i++) {

		//draw new line
		line(currentVerDrawX, startVerDrawY, currentVerDrawX, endVerDrawY);

		//increment y-counter
		currentVerDrawX += gridCellSize;
	}

	//disable stroke and fill again
	noStroke();
	fill(255);
}

function setupGridBackdrop() {

	//calculations
	var firstGridWidth = gridNumRows * gridCellSize;
	var firstSquareSize = firstGridWidth + (borderOffset * 4);
	var secondSquareSize = firstGridWidth + (borderOffset * 2);

	//coordinates
	var firstSquareX = 0;
	var firstSquareY = 0;
	var secondSquareX = borderOffset;
	var secondSquareY = borderOffset;

	//setup first colours
	noStroke();
	fill(197, 197, 198);

	//setup first square
	square(firstSquareX, firstSquareY, firstSquareSize, 20);

	//setup second colours
	noStroke();
	fill(87, 146, 185);

	//setup second square
	square(secondSquareX, secondSquareY, secondSquareSize, 10);

	//disable fill again
	fill(255);
}