//image store
let primaryImg;

//coordinate store
let imageX;

function setup() {
    createCanvas(500, 333);

    //reset image progress
    imageX = 0;
}

function draw() {

    //check if we need to reset X position
    if (mouseInsideCanvas()) {

        //yes, reset it
        imageX = mouseX;
    }

    //draw primary
    image(primaryImg, 0, 0);

    //redraw secondary image
    drawSecondary(imageX);
}

function preload() {
    primaryImg = loadImage("images/bgd.jpg");
}

function drawSecondary(cropX) {
    if (cropX > 0) {
        tint(100,100,100);
        image(primaryImg, 0, 0, cropX, height, 0, 0, cropX, height);
        noTint();
    }
}

function mouseInsideCanvas() {

    //canvas bounds
    let topBound = 0;
    let rightBound = width;
    let bottomBound = height;
    let leftBound = 0;

    //conditions
    let xInside = mouseX >= leftBound && mouseX <= rightBound;
    let yInside = mouseY >= topBound && mouseY <= bottomBound;

    //result
    return xInside && yInside;
}