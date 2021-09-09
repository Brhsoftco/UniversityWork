//canvas dimensions (for preload)
var canvasWidth = 400;
var canvasHeight = 400;

//image arrays
var imagesList = new Array(4);
var imageSpeeds = new Array(4);
var imageLocations = new Array(4);
var imageBounds = new Array(4)

//maximum width of an array of images provider
function maxWidth(imagesArray) {

    //filter the maximum widths and return the largest value
    return Math.max.apply(Math, imagesArray.map(function(i) { return i.width; }))
}

//maximum height of an array of images provider
function maxHeight(imagesArray) {

    //filter the maximum heights and return the largest value
    return Math.max.apply(Math, imagesArray.map(function(i) { return i.height; }))
}

//random number provider
function randomNumber(min, max) {

    //calculate a random number and round it up
    return Math.ceil(Math.random() * (max - min) + min);
}

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

    //find the largest image dimensions
    var largestWidth = maxWidth(imagesList);
    var largestHeight = maxHeight(imagesList);

    //validation for width
    if (canvasWidth < largestWidth) {
        
        //override width
        canvasWidth = largestWidth * 2;
    }

    //validation for height
    if (canvasHeight < largestHeight) {

        //override height
        canvasHeight = largestHeight;
    }

    //create the canvas
    createCanvas(canvasWidth, canvasHeight);

    //setup image data
    for (var i=0; i < imagesList.length; i++) {
            
        //the current image
        var image = imagesList[i];

        //random speed
        var imageSpeed = randomNumber(1, 5);

        //random location
        var imageXLocation = randomNumber(0, canvasWidth - image.width);
        var imageYLocation = (canvasHeight / 2) - (image.height / 2);

        //image bounds
        var leftBound = imageXLocation;
        var rightBound = imageXLocation + image.width;

        //image assignments
        imageSpeeds[i] = imageSpeed;
        imageLocations[i] = [ imageXLocation, imageYLocation ];
        imageBounds[i] = [ leftBound, rightBound ];
    }

    //debugging
    //console.log(imageSpeeds);
    //console.log(imageLocations);
    console.log(imageBounds);
} 
  
function draw() { 
    
    //draw images
    drawImages(true);
}

function drawImages(dynamic = false) {

    //clear canvas to remove previous images
    clear();

    //go through each image
    for (var i=0; i < imagesList.length; i++) {

        //get the correct image
        var imageObject = imagesList[i];

        //correct speed polarity
        if (imageBoundsReached(i)) {

            //reverse polarity
            imageSpeeds[i] = -imageSpeeds[i];
        }

        //get the correct x location
        var imageX = dynamic
            ? imageLocations[i][0] + imageSpeeds[i]
            : imageLocations[i][0];

        //dynamic bound update
        if (dynamic) {

            //new image bounds
            var leftBound = imageX;
            var rightBound = imageX + imageObject.width;

            //set new bounds
            imageBounds[i] = [ leftBound, rightBound ];
        }

        //get the correct y location
        var imageY = imageLocations[i][1];

        //draw the image
        image(imageObject, imageX, imageY);

        //validation
        if (dynamic) {
            
            //reset image location
            imageLocations[i][0] = imageX;
        }
    }
}

function imageBoundsReached(imageIndex) {

    //select the correct bounds
    var bounds = imageBounds[imageIndex];

    //comparisons
    var leftBoundReached = bounds[0] <= 0;
    var rightBoundReached = bounds[1] >= canvasWidth;

    //trigger
    var boundsReached = leftBoundReached || rightBoundReached;

    //log bounds
    console.log(boundsReached);

    //result
    return boundsReached;t
}