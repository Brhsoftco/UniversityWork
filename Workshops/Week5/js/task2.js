//array containing all loaded images
var imagesList = new Array(4);

//image locations
var imageLocations = new Array(4);

//canvas dimensions
var canvasWidth = 400;
var canvasHeight = 400;

function preload() {

    //setup images
    for (var i=0; i < imagesList.length; i++) {

        //image file to load
        var imagePath = "images/image" + (i + 1) + ".jpg";
        
        //load the image
        var image = loadImage(imagePath);
        
        //image assignment
        imagesList[i] = image;
    }
}

function setup() { 

    //calculate image locations
    populateLocations();

    //setup canvas correctly
    createCanvas(canvasWidth, canvasHeight);
}

function populateLocations() {

    //reset canvas dimensions
    canvasWidth = 0;
    canvasHeight = 0;

    //max images in a row
    var maxImages = 2;

    //summed location points for images
    var xCurrent = 0;
    var yCurrent = 0;
    var rCurrent = 0;

    //setup image locations
    for (var i=0; i < imagesList.length; i++) {
        
        //locate the image in question
        var image = imagesList[i];

        //validation
        if (image != undefined) {

            //modify canvas totals
            canvasWidth += image.width;
            canvasHeight += image.height;

            //generate image location
            var imageLocation = [ xCurrent, yCurrent ];

            //assign location
            imageLocations[i] = imageLocation;

            //increment row-counter
            rCurrent++;

            //have we reached the row limit?
            if (rCurrent == maxImages) {
        
                //reset x-counter
                xCurrent = 0;

                //increment y-counter
                yCurrent += image.height;

                //reset row-counter
                rCurrent = 0;
            }
            else {

                //increment x-counter
                xCurrent += image.width;
            }
        }
    }
}
  
function redrawAllImages() {
    //clear the canvas
    clear();

    //draw all images
    for (var i=0; i < imagesList.length; i++) {

        //get the correct location
        var imageLocation = imageLocations[i];

        //get the correct image
        var imageObject = imagesList[i];

        //verification
        if (imageLocation != undefined && imageObject != undefined) {

            //draw image
            image(imageObject, imageLocation[0], imageLocation[1]);
        }
    }
}

function draw() {

    //redo canvas
    redrawAllImages();
    
    //image clicked?
    var clickedIndex = imageClickedIndex();

    //validation
    if (clickedIndex > -1) {

        //remove from all arrays
        imageLocations[clickedIndex] = undefined;
        imagesList[clickedIndex] = undefined;
    }
}

function imageClickedIndex() {

    //go through every image
    for (var i=0; i < imagesList.length; i++) {

        //check if it's clicked or not
        var clicked = imageIsClicked(i);

        //is the current image clicked?
        if (clicked) {

            //return the current image index
            return i;
        }
    }

    //default
    return -1;
}

function imageIsClicked(imageIndex) {

    //only perform proximity checks if the mouse is pressed
    if (mouseIsPressed) {

        //locate the image in question
        var image = imagesList[imageIndex];

        //find correct location
        var imageLocation = imageLocations[imageIndex];

        //validation
        if (image != undefined && imageLocation != undefined) {

            //image coordinates
            var imageX = imageLocation[0];
            var imageY = imageLocation[1];

            //image bounds
            var rightBound = imageX + image.width;
            var leftBound = imageX;
            var bottomBound = imageY + image.height;
            var topBound = imageY;

            //triggers
            var mouseXTriggered = (mouseX >= leftBound) && (mouseX <= rightBound);
            var mouseYTriggered = (mouseY >= topBound) && (mouseY <= bottomBound);

            //return result
            return mouseXTriggered && mouseYTriggered;
        }
    }

    //default
    return false;
}