var canvasWidth = 700;
var canvasHeight = 700;
var sceneFile = [];

function preload() {

    //load the scene file into an array of lines
    sceneFile = loadStrings("scene.txt");
}

function setup() { 

    //setup canvas correctly
    createCanvas(canvasWidth, canvasHeight);

    //no need to run every frame since the data doesn't change;
    //we can easily get away with running draw() once
    noLoop();
} 
  
function draw() { 
    
    //go through each line of the scene file
    for (var i = 0; i < sceneFile.length; i++) {

        //data values
        var sceneDrawLine = sceneFile[i].split(" ");

        //validation
        if (sceneDrawLine.length > 1) {

            //first item dictates what we want to do;
            //e.g. "CIRCLE", "COLOUR", etc.
            var sceneCommand = sceneDrawLine[0].toLowerCase();

            //data to execute the command (e.g. RGB values);
            //we slice(1) in order to remove the first element (the command)
            //and leave only the data remaining
            var sceneCommandData = sceneDrawLine.slice(1);

            //what do we want to do?
            switch (sceneCommand) {

                //colour set
                case "colour":

                    //use RGB values
                    stroke(sceneCommandData[0], sceneCommandData[1], sceneCommandData[2]);
                    fill(sceneCommandData[0], sceneCommandData[1], sceneCommandData[2]);
                    break;

                //draw a rectangle
                case "rect":

                    //use X, Y, Width and Height
                    rect(sceneCommandData[0], sceneCommandData[1], sceneCommandData[2], sceneCommandData[3]);
                    break;

                //draw a circle
                case "circle":

                    //use X, Y and Radius
                    circle(sceneCommandData[0], sceneCommandData[1], sceneCommandData[2]);
                    break;

                //draw a line
                case "line":

                    //use X, Y (start) and X, Y (end)
                    line(sceneCommandData[0], sceneCommandData[1], sceneCommandData[2], sceneCommandData[3]);
                    break;
            }
        }
    }
}