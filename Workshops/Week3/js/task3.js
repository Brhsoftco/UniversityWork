//current rectangle coordinates
let currentX;
let currentY;

//origins
let originX;
let originY;

//rectangle sizing
let rectangleW;
let rectangleH;

function setup() { 
    createCanvas(400, 400);

    //setup origin point
    originX = width  / 2;
    originY = height / 2;

    //calculate rectangle sizing
    rectangleW = width / 4;
    rectangleH = height / 6;

    //setup rectangle coordinates
    currentX = originX - (rectangleW / 2);
    currentY = originY - (rectangleH / 2);
} 
  
function draw() { 
    background(220);

    //only move rectangle if mouse is pressed
    if (mouseIsPressed) {

        //calculate pointer differences
        let pointerTravelX = mouseX - pmouseX;
        let pointerTravelY = mouseY - pmouseY;

        //apply new values
        currentX += pointerTravelX;
        currentY += pointerTravelY;
    }

    //draw rectangle
    rect(currentX, currentY, rectangleW, rectangleH);
}