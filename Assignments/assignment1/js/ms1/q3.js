//incrementing angles
let blueAngle = 0;
let redAngle = 0;

//speeds
let blueSpeed = 1;
let redSpeed = 1;

//base canvas definitions
let genericSquare = 400;
let canvasWidth = genericSquare;
let canvasHeight = genericSquare;

function setup() {
	//create the base canvas
    createCanvas(canvasWidth, canvasHeight);
	
	//define frame-rate lock
	frameRate(4);
}

function draw() {
	
    //shared diameter of both circles
	let diameter = ((canvasHeight + canvasWidth) / 2) / 20;
    
    //angle difference factors
    let xFactor = diameter;
    let yFactor = diameter / 2;
  
    //required angle factors
    let blueXAngle = canvasWidth * 0.225;
    let blueYAngle = blueXAngle / 2;
    let redXAngle = blueXAngle + xFactor;
    let redYAngle = blueYAngle + yFactor;
  
	//needed coordinates
	let blueX = (canvasWidth / 2) + blueXAngle * cos((blueAngle * 180) / PI);
	let blueY = (canvasHeight / 2) + blueYAngle * sin((blueAngle * 180) / PI);
	let redX = (canvasWidth / 2) + redXAngle * cos((redAngle * 180) / PI);
	let redY = (canvasHeight / 2) + redYAngle * sin((redAngle * 180) / PI);
	
    //canvas colouring
    background(51, 102, 0);
    stroke(128, 128, 128);
	
	//define road width
    strokeWeight(40);
	
	//disable colour fill
    noFill();
	
	//create the road
    ellipse((canvasWidth / 2), (canvasHeight / 2), (canvasWidth / 2), (canvasHeight / 4));
	
	//create stroke for road
    stroke(204, 204, 115);
	
	//define yellow line width
    strokeWeight(1);
	
	//draw dual yellow road lines
    ellipse((canvasWidth / 2), (canvasHeight / 2), (canvasWidth / 2 - 2), (canvasHeight / 4 - 2));
    ellipse((canvasWidth / 2), (canvasHeight / 2), (canvasWidth / 2 + 2), (canvasHeight / 4 + 2));
	
	//disable stroke
    noStroke();
	
	//create blue circle
    fill('blue')
    circle(blueX, blueY, diameter);
	
	//blue angle increases by a standard amount
    blueAngle += blueSpeed;
	
	//create red circle
    fill('red')
    circle(redX, redY, diameter);
	
	//red circle is faster than blue circle
    redAngle += redSpeed;
}