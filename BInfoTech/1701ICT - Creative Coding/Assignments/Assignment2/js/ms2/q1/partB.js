function setup() {

    //create the base canvas
	createCanvas(350, 350);

    //limit the frame-rate to a more reasonable number
    frameRate(5);
}


function draw() {

    //cool green background
	background('#2ecc71');

    //dont' try and fill any shapes
	noFill();

    //intervals
    var ySpacing = 4;
    var curveAmplitude = 20;

    //run a loop to fill the entire canvas
	for (var y = -curveAmplitude; y < width; y += ySpacing) {

        //funky blue colour (looks nice when added to green)
        stroke("blue");

        //random amplitude
        var randAmp = random(20, 50);

        //start drawing the curved line
		beginShape();

        //total vertices
        var vertexTotal = 0;
        var vertexAmped = false;
        
        //ensures the first component is drawn correctly
        curveVertex(vertexTotal, y + randAmp);

        //start creating vertices
        for (var i=0; i <= width / 50; i++) {

            //generate vertex
            if (vertexAmped) {

                //include amplitude
                curveVertex(vertexTotal, y + randAmp);

                //switch mode
                vertexAmped = false;
            }
            else {

                //normal vertex
                curveVertex(vertexTotal, y + 0);

                //switch mode
                vertexAmped = true;
            }

            //bump total
            vertexTotal += 50;
        }

        //ensures the final component is drawn correctly
        curveVertex(vertexTotal, y + randAmp);

        //end of the line drawing session
		endShape();

	}

}