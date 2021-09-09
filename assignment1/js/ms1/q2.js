//store pie chart section angles here
let angles = [];

//data is stored here in the format: [int(COUNT), string(LABEL)]
let data = [
	[4, "Comedy"],
	[5, "Action"],
	[6, "Romance"],
	[1, "Drama"],
	[4, "SciFi"],
	[2, "Documentary"]
];

//colours array contains individual arrays of size 3 containing RGB values
let colours = [];

//size of pie chart labels
let lSize = 25;

//category description label radius factor
let rDescLabel = 1.2;

//percentage label radius factor
let rPercLabel = 0.5;

function setup() {
	
	//setup canvas
    var canvas = createCanvas(720, 400);
	
	//render to div with ID "render"
    canvas.parent("render");
	
	//fill the colours array
    setupRandomColours();
	
	//fill the angles array
    setupAngles();
	
	//disable strokes
    noStroke();
	
	//run only once
    noLoop();
}

function setupAngles() {
	
	//stores the sum of all counts
    let total = 0;
	
	//loop through all data
    for (let i = 0; i < data.length; i++) {
		
		//add the count to the total
        total += data[i][0];
    }
	
	//loop through all data
    for (let i = 0; i < data.length; i++) {
		
		//calculate the angle and round it up (individual count / total count * 360)
        let angle = Math.ceil((data[i][0] / total) * 360);
		
		//add the new angle
        angles.push(angle);
    }
}

function setupRandomColours() {
	
	//bounds
	let colourUpper = 255;
	let colourLower = 10;
	
	//loop through all data
    for (let i = 0; i < data.length; i++) {
		
		//push a new RGB array
        colours.push(
            [
				//random red value
                floor(random(colourLower, colourUpper)),
				
				//random green value
                floor(random(colourLower, colourUpper)),
				
				//random blue value
                floor(random(colourLower, colourUpper))
            ]);
    }
}

function draw() {
	
	//set the background colour to a light gray
    background(100);
	
	//render the pie chart with a diameter of 300px
    renderChart(300, angles);
}

function renderChart(diameter, contents) {
	
	//the previous processed angle in the array
    let lastAngle = 0;
	
	//loop through all angles
    for (let i = 0; i < contents.length; i++) {
		
		//colour pie chart segment from random colours array
        fill(colours[i]);
		
		//create the new pie chart segment from where the last one
		//left off
        arc(
            width / 2,
            height / 2,
            diameter,
            diameter,
            lastAngle,
            lastAngle + radians(angles[i]));
			
		//stroke size to 1
        stroke(1);
		
		//set label fill to solid white and slight transparency
        fill(255, 255, 255, 240);
		
		//set label text size appropriately
        textSize(lSize);
		
		//measure width of angle to determine draw size
        let labelWidthDesc = textWidth(String(angles[i]));
		
		//calculate height of angle to determine draw size
        let labelHeightDesc = textAscent() - textDescent();
		
		//calculate percentage of total that angle represents
		let labelPerc = Math.ceil((angles[i] / 360) * 100) + "%";
		
		//measure width of percentage to determine draw size
		let labelWidthPerc = textWidth(String(labelPerc));
		
		//calculate height of percentage to determine draw size
		let labelHeightPerc = textAscent() - textDescent();
		
		//draw category description (e.g. Movies) label
        text(data[i][1],
            width / 2 + cos(lastAngle + radians(angles[i] / 2)) * diameter * (rDescLabel / 2) - labelWidthDesc / 2,
            height / 2 + sin(lastAngle + radians(angles[i] / 2)) * diameter * (rDescLabel / 2) + labelHeightDesc / 2);
			
		//draw percentage label
		text(labelPerc,
            width / 2 + cos(lastAngle + radians(angles[i] / 2)) * diameter * (rPercLabel / 2) - labelWidthPerc / 2,
            height / 2 + sin(lastAngle + radians(angles[i] / 2)) * diameter * (rPercLabel / 2) + labelHeightPerc / 2);
			
		//set last angle in order to position next segment
        lastAngle += radians(angles[i]);
    }
}
