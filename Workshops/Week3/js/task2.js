//debug switch
let debug = false;

//circle measurements
let circleDiameter;

//circle bounds
let circleRightBound;
let circleLeftBound;
let circleTopBound;
let circleBottomBound;

//misc. coordinate values
let originY;

//required cumulative coordinate value(s)
let currentX;
let currentY;
let currentSpeed;

function setup() { 
    createCanvas(400, 400);

    //initial circle setup
    circleDiameter = (width + height) / 8;
    circleRightBound = currentX + (circleDiameter / 2);
    circleLeftBound = currentX - (circleDiameter / 2);
    circleTopBound = currentY - (circleDiameter / 2);
    circleBottomBound = currentY + (circleDiameter / 2);

    //initial coordinate values setup
    originY = height / 2;
    currentX = circleDiameter / 2;
    currentY = originY;
    currentSpeed = 1;
} 
  
function draw() { 
    background(220);

    //triggers
    let rightBoundTrigger = circleRightBound >= width;
    let leftBoundTrigger = circleLeftBound <= 0;

    //polarity decision
    if (rightBoundTrigger || leftBoundTrigger) {

        //reverse polarity
        currentSpeed = -currentSpeed;
    }

    //stop trigger
    let stop = mouseInBounds();

    //calculate circle position
    let circleX = !stop ? currentX + currentSpeed : currentX;
    let circleY = originY;
    
    //apply new value
    currentX = circleX;

    //draw circle
    ellipse(circleX, circleY, circleDiameter);

    //bounds visibility is limited to debug mode only
    if (debug)
        drawBounds(stop);

    //update bounds
    circleRightBound = currentX + (circleDiameter / 2);
    circleLeftBound = currentX - (circleDiameter / 2);
    circleTopBound = currentY - (circleDiameter / 2);
    circleBottomBound = currentY + (circleDiameter / 2);
}

function mouseInBounds() {

    //coordinate tests
    let yInside = mouseY >= circleTopBound && mouseY <= circleBottomBound;
    let xInside = mouseX >= circleLeftBound && mouseX <= circleRightBound;

    //result
    return yInside && xInside;
}

function drawBounds(boundsActivated = false) {

    //colouring
    stroke(boundsActivated ? "red" : "green");
    strokeWeight(1);

    //top bound calculations
    let topX1 = circleLeftBound;
    let topY1 = circleTopBound;
    let topX2 = circleLeftBound + circleDiameter;
    let topY2 = circleTopBound;

    //right bound calculations
    let rightX1 = circleRightBound;
    let rightY1 = currentY - (circleDiameter / 2);
    let rightX2 = circleRightBound;
    let rightY2 = currentY + (circleDiameter / 2);

    //bottom bound calculations
    let bottomX1 = circleLeftBound;
    let bottomY1 = circleBottomBound;
    let bottomX2 = circleLeftBound + circleDiameter;
    let bottomY2 = circleBottomBound;

    //left bound calculations
    let leftX1 = circleLeftBound;
    let leftY1 = currentY - (circleDiameter / 2);
    let leftX2 = circleLeftBound;
    let leftY2 = currentY + (circleDiameter / 2);

    //draw all bounds
    line(topX1, topY1, topX2, topY2);
    line(rightX1, rightY1, rightX2, rightY2);
    line(bottomX1, bottomY1, bottomX2, bottomY2);
    line(leftX1, leftY1, leftX2, leftY2);

    //reset stroke
    stroke("black");
}

function toggleDebugMode() {

    //toggle
    debug = !debug;
}