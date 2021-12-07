// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 262.5;
canvas.height = 375;



//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
function changeColor(event) {
	console.log("Color Change!")
	console.log(event)
	console.log(event.keyCode)
	if (event.keyCode == 82)
		elem.style.borderColor = "red"
	else if (event.keyCode == 66)
		elem.style.borderColor = "blue"
	else if (event.keyCode == 71)
		elem.style.borderColor = "green"
	else if (event.keyCode == 89)
		elem.style.borderColor = "yellow"
	else
		console.log("I don't know that color")
}
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)


canvas.addEventListener('mousemove', function(e){
	console.log(this);
	console.log(e)
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	console.log(this);
	console.log(e)
})

// Functions!
// I would add a function for draw
function draw(){
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
}