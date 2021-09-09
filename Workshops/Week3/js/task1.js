function setup() { 
    createCanvas(400, 400);
} 
  
function draw() { 
    background(220);

    //origin coordinates
    var originX = width  / 2;
    var originY = height / 2;

    //line coordinates
    var lineX = 0;
    var lineY = originY;

    //triangle measurements
    let triW = 50;
    let triH = 50;

    //draw line
    line(lineX, lineY, width, lineY);

    //condition
    let mouseAbove = mouseY <= originY;

    //test mouse position
    if (mouseAbove) {

        //normal triangle coordinates (below line)
        let norTriX1 = originX - triW;
        let norTriY1 = originY + triH;
        let norTriX2 = originX;
        let norTriY2 = originY;
        let norTriX3 = originX + triW;
        let norTriY3 = originY + triH;

        //draw triangle
        triangle(norTriX1, norTriY1, norTriX2, norTriY2, norTriX3, norTriY3);
    }
    else {
        
        //inverted triangle coordinates (above line)
        let invTriX1 = originX - triW;
        let invTriY1 = originY - triH;
        let invTriX2 = originX;
        let invTriY2 = originY;
        let invTriX3 = originX + triW;
        let invTriY3 = originY - triH;

        //draw triangle
        triangle(invTriX1, invTriY1, invTriX2, invTriY2, invTriX3, invTriY3);
    }
}