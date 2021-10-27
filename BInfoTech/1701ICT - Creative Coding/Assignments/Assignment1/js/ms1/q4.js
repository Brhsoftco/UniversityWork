//globals
let angle = 0;
let debugMode = false;

function setup() {
    
    //setup canvas controller
    var canvas = createCanvas(400, 400);
}

function draw() {
    
    //draw suitable background
    background(125)
  
    //no external line
    noStroke();
    
    //setup for degrees not radians
    angleMode(DEGREES);
  
    //intervals
    let speed = 1;
    let radius = 0;
  
    //initial positions
    let initPosX = width  / 2;
    let initPosY = height / 2;
  
    //calculated angular positions
    let angPosX = radius * cos(angle);
    let angPosY = radius * sin(angle);
    
    //calculated new positions
    let newPosX = initPosX + angPosX;
    let newPosY = initPosY + angPosY;
  
    //head setup
    let headDiameter = width / 4;
    let eyeDiameter = headDiameter / 4;
  
    //orbital radii for heads
    let oradWhiteHead = headDiameter - (headDiameter / 2);
    let oradBlackHead = -(headDiameter / 2);
  
    //orbital radii for eyes (for clarity)
    let oradWhiteEye  = oradBlackHead;
    let oradBlackEye  = oradWhiteHead;
  
    //white head positioning
    let whiteHeadX = initPosX + (cos(angle) * oradWhiteHead);
    let whiteHeadY = initPosY + (sin(angle) * oradWhiteHead);
    
    //white head debug triangle
    let whiteHeadTriX = initPosX + (cos(0) * oradWhiteHead);
    let whiteHeadTriY = initPosY + (sin(0) * oradWhiteHead);
  
    //black head positioning
    let blackHeadX = initPosX + (cos(angle) * oradBlackHead);
    let blackHeadY = initPosY + (sin(angle) * oradBlackHead);
    
    //black head debug triangle
    let blackHeadTriX = initPosX + (cos(0) * oradBlackHead);
    let blackHeadTriY = initPosY + (sin(0) * oradBlackHead);
  
    //white eye positioning
    let whiteEyeX = initPosX + (cos(angle) * oradWhiteEye);
    let whiteEyeY = initPosY + (sin(angle) * oradWhiteEye);
    
    //black eye positioning
    let blackEyeX = initPosX + (cos(angle) * oradBlackEye);
    let blackEyeY = initPosY + (sin(angle) * oradBlackEye);
  
    //create black half
    fill(0);
    arc(
        newPosX,
        newPosY,
        initPosX,
        initPosY,
        0 + angle,
        180 + angle);

    //create white half
    fill(255);
    arc(
        newPosX,
        newPosY,
        initPosX,
        initPosY,
        180 + angle,
        360 + angle);
  
    //setup white head
    fill(255);
    ellipse(whiteHeadX, whiteHeadY, headDiameter);
    
    //setup black head
    fill(0);
    ellipse(blackHeadX, blackHeadY, headDiameter);
  
    //setup white eye
    fill(255);
    ellipse(whiteEyeX, whiteEyeY, eyeDiameter);
  
    //setup black eye
    fill(0);
    ellipse(blackEyeX, blackEyeY, eyeDiameter);
  
    //debug mode triangular visualisation
    if (debugMode) {
      
      //create origin ellipse
      fill(0,255,0)
      stroke(0,255,0);
      ellipse(initPosX, initPosY, eyeDiameter / 4)
      
      //disable fills
      noFill();
      
      //create white head triangle
      stroke(255,0,0);
      triangle(initPosX, initPosY, whiteHeadX, whiteHeadY, whiteHeadTriX, whiteHeadTriY);
      
      //create black head triangle
      stroke(0,0,255);
      triangle(initPosX, initPosY, blackHeadX, blackHeadY, blackHeadTriX, blackHeadTriY);
    }
  
    //bump angle to induce rotation
    angle += speed;
}