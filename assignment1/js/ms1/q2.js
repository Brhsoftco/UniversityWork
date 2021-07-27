let angles = [];
let data = [[4, "Comedy"], [5, "Action"], [6, "Romance"], [1, "Drama"], [4, "SciFi"]];
let colours = [];
let lSize = 25;
let rDescLabel = 1.2;
let rPercLabel = 0.5;

function setup() {
    var canvas = createCanvas(720, 400);
    canvas.parent("render");
    setupRandomColours();
    setupAngles();
    noStroke();
    noLoop();
}

function setupAngles() {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i][0];
    }
    for (let i = 0; i < data.length; i++) {
        let angle = Math.ceil((data[i][0] / total) * 360);
        angles.push(angle);
    }
}

function setupRandomColours() {
    for (let i = 0; i < data.length; i++) {
        colours.push(
            [
                floor(random(10, 255)),
                floor(random(10, 255)),
                floor(random(10, 255))
            ]);
    }
}

function draw() {
    background(100);
    renderChart(300, angles);
}

function renderChart(diameter, contents) {
    let lastAngle = 0;
    for (let i = 0; i < contents.length; i++) {
        fill(colours[i]);
        arc(
            width / 2,
            height / 2,
            diameter,
            diameter,
            lastAngle,
            lastAngle + radians(angles[i]));
        stroke(1);
        fill(255, 255, 255, 240);
        textSize(lSize);
        let labelWidthDesc = textWidth(String(angles[i]));
        let labelHeightDesc = textAscent() - textDescent();
		let labelPerc = Math.ceil((angles[i] / 360) * 100) + "%";
		let labelWidthPerc = textWidth(String(labelPerc));
		let labelHeightPerc = textAscent() - textDescent();
        text(data[i][1],
            width / 2 + cos(lastAngle + radians(angles[i] / 2)) * diameter * (rDescLabel / 2) - labelWidthDesc / 2,
            height / 2 + sin(lastAngle + radians(angles[i] / 2)) * diameter * (rDescLabel / 2) + labelHeightDesc / 2);
		text(labelPerc,
            width / 2 + cos(lastAngle + radians(angles[i] / 2)) * diameter * (rPercLabel / 2) - labelWidthPerc / 2,
            height / 2 + sin(lastAngle + radians(angles[i] / 2)) * diameter * (rPercLabel / 2) + labelHeightPerc / 2);
        lastAngle += radians(angles[i]);
    }
}
