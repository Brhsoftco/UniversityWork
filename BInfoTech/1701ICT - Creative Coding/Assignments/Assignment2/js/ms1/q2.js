//store the raw file contents
var tspFileContents = Array();
var solFileContents = Array();

//problem information
var problemName = "";
var problemComment = "";
var problemLinesDrawn = 0;

//parsed file contents
var tspData = Array();
var solData = Array();

//visualisation settings
var pointRadius = 5;
var canvasHeaderBuffer = 60;
var canvasFooterBuffer = 60;

function loadTSP() {

	//validation
	if (tspFileContents.length > 0) {

		//reset data array
		tspData = Array();

		//content flag
		var reachedData = false;

		//name field
		const NAME_FIELD = "NAME: ";
		const NAME_FIELD_ALT = "NAME : ";

		//comment field
		const COMMENT_FIELD = "COMMENT: ";
		const COMMENT_FIELD_ALT = "COMMENT : ";

		//data traversal markers
		const DATA_START = "NODE_COORD_SECTION";
		const DATA_END = "EOF";

		//go through all TSP file contents
		for (var i = 0; i < tspFileContents.length; i++) {

			//the line in question
			var line = tspFileContents[i];

			//name field?
			if (line.startsWith(NAME_FIELD)) {

				//set the problem name
				problemName = line.replace(NAME_FIELD, "");
			}
			else if (line.startsWith(NAME_FIELD_ALT)) {

				//set the problem name
				problemName = line.replace(NAME_FIELD_ALT, "");
			}
			else if (line.startsWith(COMMENT_FIELD)) {

				//set the problem comment
				problemComment = line.replace(COMMENT_FIELD, "");
			}
			else if (line.startsWith(COMMENT_FIELD_ALT)) {

				//set the problem comment
				problemComment = line.replace(COMMENT_FIELD_ALT, "");
			}
			else if (line.startsWith(DATA_START)) {

				//toggle data start
				reachedData = true;
			}
			else if (line.startsWith(DATA_END)) {

				//toggle data end
				reachedData = false;
			}
			else {

				if (reachedData) {

					//split the city data
					var cityRawData = line.split(" ");

					//remove all spaces, empty entries and null entries
					var filteredCityData = cityRawData.filter(function (el) {
						return el != null && el != " " && el != "";
					});

					//create city object
					var city = {

						"id": parseInt(filteredCityData[0]),
						"posX": parseInt(filteredCityData[1]),
						"posY": parseInt(filteredCityData[2])
					};

					//append to the TSP data array
					tspData.push(city);
				}
			}
		}
	}
}

function preload() {

	//load available TSP files
	loadStrings("data/engine/tspListing.php?m=p", (tspList) => {

		//select a random file
		var randomTsp = tspList[Math.floor(Math.random() * tspList.length)];

		//tsp file full path
		var tspFile = "data/tsp/problems/" + randomTsp;

		//matching sol file
		var solFile = "data/tsp/solutions/" + (randomTsp.split('.')[0] + ".sol");

		//load matching sol file
		loadStrings(solFile, (sol) => {

			//assign the SOL file
			solFileContents = sol;
		});

		//load TSP file
		loadStrings(tspFile, (tsp) => {

			//assign the TSP file
			tspFileContents = tsp;
		});
	});
}

function calculateAdjustmentFactor() {

}

function calculateBounds() {

	//all x-coordinates
	var posX = tspData.map(function(o) { 
		return o.posX
	});

	//all y-coordinates
	var posY = tspData.map(function(o) {
		return o.posY;
	});

	//canvas width (right bound)
	var right = Math.max.apply(Math, posX) + 20;

	//canvas height (bottom bound)
	var bottom = Math.max.apply(Math, posY) + 20;

	//return resulting bounds
	return {
		"width": right,
		"height": bottom
	};
}

function generateRandomColour() {

	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function getCityById(cityId) {

	return tspData.find(x => x.id == cityId);
}

function drawSolution() {

	//setup line visuals
	stroke(0);
	strokeWeight(1);
	noFill();

	//get highest values
	var bounds = calculateBounds();

	//calculate scaling adjustments
	var scaleX = width / bounds.width;
	var scaleY = (height - canvasFooterBuffer) / bounds.height;

	//skips the first two 'header' lines
	var offset = 2;

	//stores most recent city
	var prevCity = null;

	//line plots
	var startX = 0;
	var startY = 0;
	var endX = 0;
	var endY = 0;

	//go through each line in the solution file
	for (var i = offset; i < solFileContents.length; i++) {

		//get the current city
		var city = getCityById(solFileContents[i]);

		//did we set a previous city?
		if (prevCity == null) {

			//seek next city in the list
			prevCity = getCityById(solFileContents[i + 1]);

			//set start coordinates
			startX = (city.posX * scaleX);
			startY = (city.posY * scaleY) + canvasHeaderBuffer;

			//set end coordinates
			endX = (prevCity.posX * scaleX);
			endY = (prevCity.posY * scaleY) + canvasHeaderBuffer;
		}
		else {

			//set start coordinates
			startX = (prevCity.posX * scaleX);
			startY = (prevCity.posY * scaleY) + canvasHeaderBuffer;

			//set end coordinates
			endX = (city.posX * scaleX);
			endY = (city.posY * scaleY) + canvasHeaderBuffer;

			//set new previous city
			prevCity = city;
		}

		//draw line
		line(startX, startY, endX, endY);
	}

	//get the first city
	var firstCity = getCityById(solFileContents[offset]);

	//calculate final line positions
	startX = (prevCity.posX * scaleX);
	startY = (prevCity.posY * scaleY) + canvasHeaderBuffer;
	endX = (firstCity.posX * scaleX);
	endY = (firstCity.posY * scaleY) + canvasHeaderBuffer;

	//draw the final line
	line(startX, startY, endX, endY)
}

function showLoadedTSP() {

	//get highest values
	var bounds = calculateBounds();

	//calculate scaling adjustments
	var scaleX = width / bounds.width;
	var scaleY = (height - canvasFooterBuffer) / bounds.height;

	//go through each city
	for (var i = 0; i < tspData.length; i++) {

		//city object
		var obj = tspData[i];

		//scale positions
		var posX = (obj.posX * scaleX);
		var posY = (obj.posY * scaleY) + canvasHeaderBuffer;

		//new colour for the point
		var fillColour = generateRandomColour();

		//setup point
		fill(fillColour);
		stroke(fillColour);
		strokeWeight(2);

		//draw point
		circle(posX, posY, pointRadius);
	}

	//set text fill to white
	fill(0);

	//normal stroke
	strokeWeight(1);
	stroke(0);

	//text to display
	var name = "Problem: " + problemName;
	var data = "Loaded Points: " + tspData.length;
	var comment = "Comment: " + problemComment;
	var tour = "Tour Length: " + solFileContents[1];

	//set font size
	textSize(20);

	//calculate width offsets
	var nameOffset = textWidth(name);
	var commentOffset = textWidth(comment);
	var dataOffset = textWidth(data);

	//draw fields
	text(name, 5, 25);
	text(comment, 20 + nameOffset, 25);
	text(data, 40 + nameOffset + commentOffset, 25);
	text(tour, 60 + nameOffset + commentOffset + dataOffset, 25);
}

function setup() {

	//parse the data
	loadTSP();

	//figure out values for canvas scaling (+20 is for padding)
	var canvasWidth = 1200;
	var canvasHeight = 794 + (canvasHeaderBuffer + canvasFooterBuffer);

	//debugging
	console.log("Canvas Size: (" + canvasWidth + "," + canvasHeight + ")");

	//setup the canvas
	var canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent("render");

	//visualise the problem
	showLoadedTSP();

	//visualise the solution
	drawSolution();
}

function draw() {

}