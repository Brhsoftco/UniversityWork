function setup() {
	var canvas = createCanvas(500, 96);
	canvas.parent("render");
}

function draw() {
    background(100, 107, 250);
    strokeWeight(1);
	
	fill('rgba(104, 202, 153, 0.2)');
	rect(17, 17, 64, 64, 17);
	
	fill('rgba(104, 202, 153, 0.4)');
	rect(115, 17, 64, 64, 17);
	
	fill('rgba(104, 202, 153, 0.6)');
	rect(211, 17, 64, 64, 17);
	
	fill('rgba(104, 202, 153, 0.8)');
	rect(307, 17, 64, 64, 17);
	
	fill('rgba(104, 202, 153, 1.0)');
	rect(403, 17, 64, 64, 17);
}