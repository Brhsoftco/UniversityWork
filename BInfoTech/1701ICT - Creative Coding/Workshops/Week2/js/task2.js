function setup() { 
    createCanvas(400, 400);
} 
  
function draw() { 
    background(220);

    //center coordinates
    let originX = Math.round(width  / 2);
    let originY = Math.round(height / 2);

    //mouse coordinates
    let roundedMouseX = Math.round(mouseX);
    let roundedMouseY = Math.round(mouseY);

    //text measurements
    let textS  = "(" + roundedMouseX + "," + roundedMouseY + ")";
    let textW = textWidth(textS);

    //text coordinates
    let textX = Math.round(originX - (textW / 2));
    let textY = originY;

    //rectangle measurements
    let rectW = textW + (textW / 4);
    let rectH = Math.round(height / 5);
    let rectC = 20;

    //rectangle coordinates
    let rectX = Math.round(originX - (rectW / 2));
    let rectY = Math.round(originY - (rectH / 2));

    //draw rectangle
    rect(rectX, rectY, rectW, rectH, rectC);

    //draw text
    textSize(20);
    textStyle(BOLD);
    text(textS, textX, textY);
}