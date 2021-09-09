//required line height
var lineHeight = 10;

//thickness of border lines
var boundaryWeight = 2;

function setup() {
	var canvas = createCanvas(600, 300);
	canvas.parent("render");

	//don't continuously recalculate
	noLoop();
}

function draw() {

	//background is white
    background(255);

	//setup first question
	drawFirstImage();

	//setup second question
	drawSecondImage();

	//setup third question
	drawThirdImage();

	//setup fourth question
	drawFourthImage();

	//setup fifth question
	drawFifthImage();

	//setup sixth question
	drawSixthImage();

	//draw boundaries
	drawBoundaryLines();
}

function drawAlternatingLines(startX, startY, endX, firstColour, secondColour) {

	//required lines
	var amountOfLines = (height / 2) / lineHeight;

	//stroke setup
	strokeWeight(lineHeight);
	strokeCap(SQUARE);

	//colour alternation flag
	var colourSwitch = false;

	//current coordinates to draw
	var currentStartX = startX;
	var currentEndX = endX;
	var currentY = (lineHeight / 2) + startY;

	//begin drawing lines
	for (var i=0; i < amountOfLines; i++) {

		//switch the colour
		colourSwitch = !colourSwitch;

		//test for correct colour
		if (colourSwitch)

			//first line
			stroke(firstColour);
		else

			//second line
			stroke(secondColour);

		//draw line
		line(currentStartX, currentY, currentEndX, currentY);

		//update y-position
		currentY += lineHeight;
	}
}

function drawSixthImage() {

	//coordinates to draw lines on
	var currentStartX = ((width / 3) * 2) + 1;
	var currentEndX = width - 1;
	var currentY = (height / 2) + 1;

	//draw coloured lines
	drawAlternatingLines(currentStartX, currentY, currentEndX, "red", "blue");

	//rhombus setup
	fill(255)
	stroke(0);
	strokeWeight(boundaryWeight);

	//rhombus parameters
	var rhomW = height / 3;
	var rhomH = height / 4;
	var rhomX = (width - (rhomW + (rhomW / 2)));
	var rhomY = (((height / 2)) + ((height / 2) / 2)) - (rhomH / 2);

	//first rhomezium coordinate
	var firstPointX = rhomX;
	var firstPointY = rhomY + rhomH;

	//second rhomezium coordinate
	var secondPointX = rhomX + rhomW;
	var secondPointY = rhomY + rhomH;

	//third rhomezium coordinate
	var thirdPointX = rhomX + rhomW + (rhomW / 4);
	var thirdPointY = rhomY;

	//fourth rhomezium coordinate
	var fourthPointX = rhomX + (rhomW / 4);
	var fourthPointY = rhomY;

	//draw rhombus
	quad(firstPointX, firstPointY, secondPointX, secondPointY,
		thirdPointX, thirdPointY, fourthPointX, fourthPointY);

	//stroke setup
	stroke("gold");

	//amount of rhombus lines to be drawn
	var rhomLines = 4;

	//line spacing
	var lineSpacing = (rhomW - (rhomW / 4)) / (rhomLines);

	//current x position
	var currentX = fourthPointX;
	var startY = rhomY;
	var endY = rhomY + rhomH;

	//begin drawing lines
	for (var i=0; i < rhomLines + 1; i++) {
		
		//draw line
		line(currentX, startY, currentX, endY);

		//advance x-position
		currentX += lineSpacing;
	}
}

function drawFifthImage() {

	//coordinates to draw lines on
	var currentStartX = (width / 3) + 1;;
	var currentEndX = ((width / 3) * 2) - 1;
	var currentY = (height / 2) + 1;

	//draw coloured lines
	drawAlternatingLines(currentStartX, currentY, currentEndX, "blue", "yellow");

	//trapezium setup
	fill(255)
	stroke(0);
	strokeWeight(boundaryWeight);

	//trapezium parameters
	var trapW = height / 3;
	var trapH = height / 4;
	var trapX = ((width / 3) * 2) - (trapW + (trapW / 2) * 2) + trapW / 2;
	var trapY = (((height / 2)) + ((height / 2) / 2)) - (trapH / 2);

	//first trapezium coordinate
	var firstPointX = trapX;
	var firstPointY = trapY + trapH;

	//second trapezium coordinate
	var secondPointX = trapX + trapW;
	var secondPointY = trapY + trapH;

	//third trapezium coordinate
	var thirdPointX = trapX + (trapW - (trapW / 4));
	var thirdPointY = trapY;

	//fourth trapezium coordinate
	var fourthPointX = trapX + (trapW / 4);
	var fourthPointY = trapY;

	//draw trapezium
	quad(firstPointX, firstPointY, secondPointX, secondPointY,
		thirdPointX, thirdPointY, fourthPointX, fourthPointY);

	//stroke setup
	stroke("red");

	//amount of trapezium lines to be drawn
	var trapLines = 5;

	//line spacing
	var lineSpacing = (trapW - (trapW / 4)) / (trapLines + 1);

	//current x position
	var currentX = fourthPointX;
	var startY = trapY;
	var endY = trapY + trapH;

	//begin drawing lines
	for (var i=0; i < trapLines; i++) {
		
		//draw line
		line(currentX, startY, currentX, endY);

		//advance x-position
		currentX += lineSpacing;
	}
}

function drawFourthImage() {

	//coordinates to draw lines on
	var currentStartX = 1;
	var currentEndX = (width / 3) - 1;
	var currentY = (height / 2) + 1;

	//draw coloured lines
	drawAlternatingLines(currentStartX, currentY, currentEndX, "yellow", "red");

	//rectangle setup
	fill(255)
	stroke(0);
	strokeWeight(boundaryWeight);

	//rectangle parameters
	var rectW = height / 3;
	var rectH = height / 4;
	var rectX = (width / 3) - (rectW + (rectW / 2));
	var rectY = (((height / 2)) + ((height / 2) / 2)) - (rectH / 2);

	//draw rectangle
	rect(rectX, rectY, rectW, rectH);

	//stroke setup
	stroke("blue");

	//amount of rectangle lines to be drawn
	var rectLines = 5;

	//line spacing
	var lineSpacing = rectW / (rectLines + 1);

	//current x position
	var currentX = rectX + lineSpacing;
	var startY = rectY;
	var endY = rectY + rectH;

	//begin drawing lines
	for (var i=0; i < rectLines; i++) {
		
		//draw line
		line(currentX, startY, currentX, endY);

		//advance x-position
		currentX += lineSpacing;
	}
}

function drawThirdImage() {

	//coordinates to draw lines on
	var currentStartX = ((width / 3) * 2) + 1;
	var currentEndX = width - 1;
	var currentY = 1;

	//draw coloured lines
	drawAlternatingLines(currentStartX, currentY, currentEndX, "yellow", "blue");

	//triangle setup
	fill(255)
	stroke(0);
	strokeWeight(boundaryWeight);

	//triangle parameters
	var triS = height / 3;

	//first triangle point
	var triFirstPointX = (width - (triS + (triS / 2)));
	var triFirstPointY = ((height / 2)) - ((height / 2) / 2) - (triS / 2);
	
	//second triangle point
	var triSecondPointX = triFirstPointX;
	var triSecondPointY = triFirstPointY + triS;

	//third triangle point
	var triThirdPointX = triFirstPointX + triS;
	var triThirdPointY = triSecondPointY;

	//draw triangle
	triangle(triFirstPointX, triFirstPointY, triSecondPointX, triSecondPointY, triThirdPointX, triThirdPointY);

	//calculate hypotenuse
	var triHyp = Math.round(Math.sqrt((triS * triS) + (triS * triS)));

	//stroke setup
	stroke("red");

	//amount of triangle lines to be drawn
	var triangleLines = 5;

	//line spacing
	var lineSpacing = triS / (triangleLines + 1);

	//current x position
	var currentX = triFirstPointX + lineSpacing;
	var startY = triSecondPointY;
	var currentTriBase = triS;

	//calculate angle
	var triAngleB = Math.acos(currentTriBase / triHyp) * 180/Math.PI;

	//debugging
	console.log("Angle: " + triAngleB);

	//begin drawing lines
	for (var i=0; i < triangleLines; i++) {

		//log calculation
		//console.log(currentTriBase);

		//calculate line length
		var lineLength = currentTriBase - lineSpacing;

		//debugging
		//console.log("Leng: " + lineLength);
		//console.log("Base: " + currentTriBase + "\n")

		//calculate appropriate point
		var endY = startY - lineLength;

		//draw line
		line(currentX, startY, currentX, endY);

		//update base
		currentTriBase -= Math.round(lineSpacing);

		//advance x-position
		currentX += lineSpacing;
	}
}

function drawSecondImage() {

	//coordinates to draw lines on
	var currentStartX = (width / 3) + 1;
	var currentEndX = ((width / 3) * 2) - 1;
	var currentY = 1;

	//draw coloured lines
	drawAlternatingLines(currentStartX, currentY, currentEndX, "red", "yellow");

	//square setup
	fill(255)
	stroke(0);
	strokeWeight(boundaryWeight);

	//square parameters
	var squareS = height / 3;
	var squareX = ((width / 3) * 2) - (squareS + (squareS / 2));
	var squareY = (((height / 2)) - ((height / 2) / 2)) - (squareS / 2);

	//draw square
	square(squareX, squareY, squareS);

	//stroke setup
	stroke("blue");

	//amount of square lines to be drawn
	var squareLines = 5;

	//line spacing
	var lineSpacing = squareS / (squareLines + 1);

	//current x position
	var currentX = squareX + lineSpacing;
	var startY = squareY;
	var endY = squareY + squareS;

	//begin drawing lines
	for (var i=0; i < squareLines; i++) {
		
		//draw line
		line(currentX, startY, currentX, endY);

		//advance x-position
		currentX += lineSpacing;
	}
}

function drawFirstImage() {

	//coordinates to draw lines on
	var currentStartX = 1;
	var currentEndX = (width / 3) - 1;
	var currentY = 1;

	//draw coloured lines
	drawAlternatingLines(currentStartX, currentY, currentEndX, "blue", "red");

	//circle setup
	fill(255)
	stroke(0);
	strokeWeight(2);

	//circle parameters
	var circleD = height / 3;
	var circleR = circleD / 2;
	var circleX = (width / 3) - ((width / 3) / 2);
	var circleY = (height / 2) - ((height / 2) / 2);

	//draw circle
	circle(circleX, circleY, circleD);

	//stroke setup
	stroke("gold");

	//amount of circle lines to be drawn
	var circleLines = 5;

	//line spacing interval
	var lineSpacing = (2.0 * circleR) / (circleLines + 1);

	//rotational factor
	var rotateAngle = 90;

	//rotational vectors
	var cosAng = Math.cos(rotateAngle * Math.PI / 180.0);
	var sinAng = Math.sin(rotateAngle * Math.PI / 180.0);

	//begin drawing lines
	for (var i=0; i < circleLines; i++) {

		//Pythagoras' theorem
		var y = lineSpacing * (i + 1) - circleR;
   		var x = Math.sqrt(circleR * circleR - y * y);

		//line location
		var lineStartX = (circleX + (y * sinAng) + (x * cosAng)) + 1;
		var lineEndX = (circleX + (y * sinAng) - (x * cosAng)) - 1;
		var lineStartY = (circleY + (y * cosAng) - (x * sinAng)) + 1;
		var lineEndY = (circleY + (y * cosAng) + (x * sinAng)) - 1;
		
		//draw line
		line(lineStartX, lineStartY, lineEndX, lineEndY);
	}
}

function drawBoundaryLines() {

	//stroke setup
	strokeWeight(2);
	stroke(0);

	//
	//vertical line coordinates
	//

	//first vertical line
	var firstVerStartX = 0;
	var firstVerStartY = 0;
	var firstVerEndX = firstVerStartX;
	var firstVerEndY = height;

	//second vertical line
	var secondVerStartX = width / 3;
	var secondVerStartY = 0;
	var secondVerEndX = secondVerStartX;
	var secondVerEndY = height;

	//third vertical line
	var thirdVerStartX = secondVerStartX * 2;
	var thirdVerStartY = 0;
	var thirdVerEndX = thirdVerStartX;
	var thirdVerEndY = height;

	//fourth vertical line
	var fourthVerStartX = width;
	var fourthVerStartY = 0;
	var fourthVerEndX = width;
	var fourthVerEndY = height;

	//
	//horizontal line coordinates
	//

	//first horizontal line
	var firstHorStartX = 0;
	var firstHorStartY = 0;
	var firstHorEndX = width;
	var firstHorEndY = 0;

	//second horicontal line
	var secondHorStartX = 0;
	var secondHorStartY = height / 2;
	var secondHorEndX = width;
	var secondHorEndY = secondHorStartY;

	//third horizontal line
	var thirdHorStartX = 0;
	var thirdHorStartY = height;
	var thirdHorEndX = width;
	var thirdHorEndY = height;

	//
	//draw all lines
	//

	//draw verticals
	line(firstVerStartX, firstVerStartY, firstVerEndX, firstVerEndY);
	line(secondVerStartX, secondVerStartY, secondVerEndX, secondVerEndY);
	line(thirdVerStartX, thirdVerStartY, thirdVerEndX, thirdVerEndY);
	line(fourthVerStartX, fourthVerStartY, fourthVerEndX, fourthVerEndY);

	//draw horizontals
	line(firstHorStartX, firstHorStartY, firstHorEndX, firstHorEndY);
	line(secondHorStartX, secondHorStartY, secondHorEndX, secondHorEndY);
	line(thirdHorStartX, thirdHorStartY, thirdHorEndX, thirdHorEndY);
}