//store track data
var trackFileData = [];
var trackData = [];
var trackTileImages = new Array();
var trackTileSize = 50;
var trackCarSize = 40;
var trackTileSprites = [];
var trackTextureList = Array();

//other objects
var carSprite = null;
var carFriction = 0.08;
var carTurnSpeed = 1;
var carDebug = false;
var carSpeed = 0;
var carSpeedLimit = 3;
var carSpeedDecay = 0.02;
var carAcceleration = 0.04;
var carDeceleration = 0.08;

//finish line coordinates
var finishLineX = 0;
var finishLineY = 0;

//NOTE: Not in use
function setupTextures() {

    //validation
    if (trackTextureList !== undefined && trackTextureList != "") {

        //go through each sprite in the list
        for (var i = 0; i < trackTextureList.length; i++) {

            //texture file path
            var textureFilePath = "data/resources/sprites/" + trackTextureList[i];

            //grab texture file in question
            var textureFile = loadImage(textureFilePath);

            //append to the listing
            trackTileImages.push(textureFile);
        }
    }
}

function preload() {

    //read track information
    trackFileData = loadStrings("data/resources/world.txt");

    //current number of textures
    let textures = 4;

    //load textures
    for (var i = 0; i < textures; i++) {

        //perform individual load
        trackTileImages.push(loadImage("data/resources/sprites/" + i + ".tex"));
    }

    //setup placeholder texture
    trackTileImages.push(loadImage("data/resources/noTexture.tex"));
}

function draw() {

    //touching grass?
    collisionCheck();

    //move the car
    movementCheck();

	//render sprites
    drawSprites();
}

function setup() {

    //setup sprite information
    setupSpriteTrackData();
    setupTrackSprites();
    setupCarSprite();

    //canvas dimensions
    var canvasWidth = trackData[0].length * trackTileSize;
    var canvasHeight = trackData.length * trackTileSize;

	//setup canvas
    var canvas = createCanvas(canvasWidth, canvasHeight);
	
	//render to div with ID "render"
    canvas.parent("render");
}

function rotateLeft() {

    //move left
    carSprite.rotation -= carTurnSpeed;
}

function rotateRight() {
    
    //move right
    carSprite.rotation += carTurnSpeed;
}

function speedUp() {
        
    //set a change in speed
    carSpeed += carAcceleration;
}

function slowDown() {

    //speed check
    if (carSpeed < 0) {
        
        //set a change in speed
        carSpeed -= carDeceleration;
    }
    else {

        //set to zero
        carSpeed = 0;
    }
}

function movementCheck() {

    //apply speed each frame
    carSprite.setSpeed(carSpeed, carSprite.rotation);

    //speed decay
    carSpeed -= carSpeedDecay;

    //validation (speed cannot be below zero)
    if (carSpeed < 0) {

        //reset to zero
        carSpeed = 0;
    }

    //left arrow pressed?
    if (keyIsDown(LEFT_ARROW)) {

        rotateLeft();
    }
    else if (keyIsDown(RIGHT_ARROW)) {

        rotateRight();
    }
    else if (keyIsDown(UP_ARROW)) {

        speedUp();
    }
    else if (keyIsDown(DOWN_ARROW)) {

        slowDown();
    }
}

function collisionCheck() {

    //is the sprite touching grass?
    for (var i = 0; i < trackTileSprites.length; i++) {

        //tile sprite in question
        let tileSprite = trackTileSprites[i];

        //touching?
        if (carSprite.overlap(tileSprite)) {

            //by how much?
            let overlapX = carSprite.position.x - tileSprite.position.x;
            let overlapY = carSprite.position.y - tileSprite.position.y;

            //debugging
            console.log("Collision overlap: (" + overlapX + ", " + overlapY + ")");

            //reset car speed
            carSpeed = 0;

            //teleport car
            carSprite.position = new p5.Vector(finishLineX, finishLineY);
            carSprite.rotation = 270;
            carSprite.setCollider("circle", 0, 0, 3);

            //exit function
            return;
        }
    }
}

function setupCarSprite() {
    
    //create new sprite
    carSprite = createSprite(finishLineX, finishLineY);

    //does the correct image index exist?
    if (trackTileImages.length >= 4) {

        //grab image
        var carSpriteImage = trackTileImages[3];

        //scaling
        var carSpriteImageWidth = (trackTileSize / carSpriteImage.width) * trackCarSize;
        var carSpriteImageHeight = (trackTileSize / carSpriteImage.height) * trackCarSize;

        //resize image correctly
        carSpriteImage.resize(carSpriteImageHeight, carSpriteImageWidth);

        //apply image sprite
        carSprite.addImage(carSpriteImage);

        //setup attributes
        carSprite.rotation = 270;
        carSprite.rotateToDirection = true;
        carSprite.friction = carFriction;
        carSprite.maxSpeed = carSpeedLimit;
        carSprite.debug = carDebug;

        //smaller collider
        carSprite.setCollider("circle", 0, 0, 3);
    }
}

function setupTrackSprites() {

    //adjustment values
    var verticalAdj = trackTileSize / 2;
    var horizontalAdj = trackTileSize / 2;

    //current traversal values
    var currentX = horizontalAdj;
    var currentY = verticalAdj;

    //go through each line of data
    for (var i = 0; i < trackData.length; i++) {

        console.log("Doing row: " + i);

        //grab the line
        var trackDataLine = trackData[i];

        //go through each column in the line
        for (var i2 = 0; i2 < trackDataLine.length; i2++) {

            console.log("Doing row: " + i + " & col: " + i2);

            //define a new sprite tile
            var spriteTile = createSprite(currentX, currentY, 40, 40);

            //validation
            if (spriteTile != undefined) {

                //convert track data to index
                var index = parseInt(trackDataLine[i2]);

                //finish line?
                if (index == 2) {

                    //set finish line coordinates
                    finishLineX = currentX;
                    finishLineY = currentY;
                }

                //grass?
                else if (index == 0) {
                    
                    //apply sprite tile
                    trackTileSprites.push(spriteTile);
                }
                
                //a larger index will cause an out-of-bounds exception and the texture won't load
                if (index >= trackTileImages.length) {
                    
                    //reset to last array element (texture not found)
                    index = trackTileImages.length - 1;
                }

                //grab the correct image
                var spriteImage = trackTileImages[index];

                //resize it to the correct tile size
                spriteImage.resize(trackTileSize, trackTileSize);

                //apply an image to the sprite
                spriteTile.addImage(spriteImage);

                //adjust x position
                currentX += trackTileSize;

                //console.log("Sprite created at: (" + currentX + "," + currentY + ")");
            }
            else {
                console.log("Error: Null sprite");
            }
        }

        //adjust positions
        currentY += trackTileSize;
        currentX = horizontalAdj;
    }

    //debugging
    console.log("Stored grass sprites: " + trackTileSprites.length);
}

function setupSpriteTrackData() {

    //setup track data
    for (var i = 0; i < trackFileData.length; i++) {

        //get individual line
        var line = trackFileData[i];
        
        //validation
        if (line != undefined) {

            //separate the line into tiles
            var lineTiles = line.split(' ');
            
            //append the line tiles
            trackData[i] = lineTiles;
        }
    }
}