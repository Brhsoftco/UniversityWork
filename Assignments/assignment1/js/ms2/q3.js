//global border constraints
var borderOffset = 10;
var borderSpacing = borderOffset + (borderOffset / 2);
var innerBorderOffset = borderOffset + borderSpacing;

//border balls
var borderBallsAnimated = [];

//sine wave values
var sineWaveOffset = 0;
var sineWaveFrequency = 5;

function setup() {

	//create the base canvas
    var canvas = createCanvas(700, 700);

    //assign to correct render area
    canvas.parent("render");

    //setup text capabilities
    textSize(60);
    textAlign(LEFT, CENTER);
}

function draw() {
	
    //clear last frame
    background(255);

    //draw border
    drawBorderLines();

    //draw sine wave
    drawSineWave();
    drawSineWave(-5);
    drawSineWave(height / 2 - 60);

    //draw creative coding text
    drawLargeText();
}

function drawLargeText() {

    //text to draw
    var textString = "Creative Coding";
    var subheading = "Learn a variety of awesome\nproblem-solving skills!";

    //draw text
    textSize(60);
    text(textString, (width / 2) - textWidth(textString) / 2, innerBorderOffset * 3);

    //draw text
    textSize(30);
    textAlign(LEFT, LEFT);
    text(subheading, (width / 2) - textWidth(subheading) / 4,
        (height / 2));
}

function drawSineWave(verticalOffset = 0) {

    //black sine wave
    stroke(4);

    //disable shape fills
    noFill();

    //start vertex
    beginShape();

    //draw the first vertex within the confines of the border
    vertex(innerBorderOffset, height - innerBorderOffset);

    //loop to draw sine wave
    for (var x=0; x < width - innerBorderOffset * 2; x++) {

        //sine-wave angle is calculated using the current offset
        var sineWaveAngle = sineWaveOffset + x * 0.01;

        //y-position is calculated using the frequency and sine of the previously-calculated angle
        var y = map(sin(sineWaveAngle), -sineWaveFrequency, sineWaveFrequency, 150, 250);

        //create the wave-point vertex
        vertex(x + innerBorderOffset, y + verticalOffset);
    }

    //create the end-point vertex
    vertex(width - innerBorderOffset, height - innerBorderOffset);

    //end of wave creation session
    endShape();

    //keep the wave moving
    sineWaveOffset += 0.01;
}

function drawBorderLines() {

    //setup stroke
    stroke(0);

    ///////////////////////////////////////////////////

    //outer-left line
    var outerLeftLineStartX = borderOffset;
    var outerLeftLineStartY = borderOffset;
    var outerLeftLineEndX = borderOffset;
    var outerLeftLineEndY = height - borderOffset;

    //outer-right line
    var outerRightLineStartX = width - borderOffset;
    var outerRightLineStartY = borderOffset;
    var outerRightLineEndX = width - borderOffset;
    var outerRightLineEndY = height - borderOffset;

    //outer-top line
    var outerTopLineStartX = borderOffset;
    var outerTopLineStartY = borderOffset;
    var outerTopLineEndX = width - borderOffset;
    var outerTopLineEndY = borderOffset;

    //outer-bottom line
    var outerBottomLineStartX = borderOffset;
    var outerBottomLineStartY = height - borderOffset;
    var outerBottomLineEndX = width - borderOffset;
    var outerBottomLineEndY = height - borderOffset;

    ///////////////////////////////////////////////////

    //inner-left line
    var innerLeftLineStartX = innerBorderOffset;
    var innerLeftLineStartY = innerBorderOffset;
    var innerLeftLineEndX = innerBorderOffset;
    var innerLeftLineEndY = height - innerBorderOffset;

    //inner-right line
    var innerRightLineStartX = width - innerBorderOffset;
    var innerRightLineStartY = innerBorderOffset;
    var innerRightLineEndX = width - innerBorderOffset;
    var innerRightLineEndY = height - innerBorderOffset;

    //inner-top line
    var innerTopLineStartX = innerBorderOffset;
    var innerTopLineStartY = innerBorderOffset;
    var innerTopLineEndX = width - innerBorderOffset;
    var innerTopLineEndY = innerBorderOffset;

    //inner-bottom line
    var innerBottomLineStartX = innerBorderOffset;
    var innerBottomLineStartY = height - innerBorderOffset;
    var innerBottomLineEndX = width - innerBorderOffset;
    var innerBottomLineEndY = height - innerBorderOffset;

    ///////////////////////////////////////////////////

    //top-left corner line
    var topLeftCornerLineStartX = borderOffset;
    var topLeftCornerLineStartY = borderOffset;
    var topLeftCornerLineEndX = innerBorderOffset;
    var topLeftCornerLineEndY = innerBorderOffset;

    //top-right corner line
    var topRightCornerLineStartX = width - borderOffset;
    var topRightCornerLineStartY = borderOffset;
    var topRightCornerLineEndX = width - innerBorderOffset;
    var topRightCornerLineEndY = innerBorderOffset;

    //bottom-left corner line
    var bottomLeftCornerLineStartX = borderOffset;
    var bottomLeftCornerLineStartY = height - borderOffset;
    var bottomLeftCornerLineEndX = innerBorderOffset;
    var bottomLeftCornerLineEndY = height - innerBorderOffset;

    //bottom-right corner line
    var bottomRightCornerLineStartX = width - borderOffset;
    var bottomRightCornerLineStartY = height - borderOffset;
    var bottomRightCornerLineEndX = width - innerBorderOffset;
    var bottomRightCornerLineEndY = height - innerBorderOffset;

    ///////////////////////////////////////////////////

    //draw outer-line
    line(outerLeftLineStartX, outerLeftLineStartY, outerLeftLineEndX, outerLeftLineEndY);
    line(outerRightLineStartX, outerRightLineStartY, outerRightLineEndX, outerRightLineEndY);
    line(outerTopLineStartX, outerTopLineStartY, outerTopLineEndX, outerTopLineEndY);
    line(outerBottomLineStartX, outerBottomLineStartY,outerBottomLineEndX, outerBottomLineEndY);
	
	//draw inner-line
    line(innerLeftLineStartX, innerLeftLineStartY, innerLeftLineEndX, innerLeftLineEndY);
    line(innerRightLineStartX, innerRightLineStartY, innerRightLineEndX, innerRightLineEndY);
    line(innerTopLineStartX, innerTopLineStartY, innerTopLineEndX, innerTopLineEndY);
    line(innerBottomLineStartX, innerBottomLineStartY,innerBottomLineEndX, innerBottomLineEndY);

    //draw corners
    line(topLeftCornerLineStartX, topLeftCornerLineStartY,
        topLeftCornerLineEndX, topLeftCornerLineEndY);
    line(topRightCornerLineStartX, topRightCornerLineStartY,
        topRightCornerLineEndX, topRightCornerLineEndY);
    line(bottomLeftCornerLineStartX, bottomLeftCornerLineStartY,
        bottomLeftCornerLineEndX, bottomLeftCornerLineEndY);
    line(bottomRightCornerLineStartX, bottomRightCornerLineStartY,
        bottomRightCornerLineEndX, bottomRightCornerLineEndY);

    //var firstBallX = 
}