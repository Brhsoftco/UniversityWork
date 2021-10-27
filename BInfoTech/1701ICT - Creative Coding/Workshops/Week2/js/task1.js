function setup() { 
    createCanvas(400, 400);
} 
  
function draw() { 
    background(220);
    fill("blue");
    ellipse(50, 50, 100, 100);
    fill("pink");
    rect(100, 100, 60, 30);
    fill("gold");
    triangle(200, 200, 250, 150, 300, 200);
    stroke("red");
    strokeWeight(10);
    line(50, 250, 300, 250);
    stroke("black");
    strokeWeight(1);
}