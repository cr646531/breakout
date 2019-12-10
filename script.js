var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// update the canvas every 10ms
setInterval(draw, 10);

// sets the initial position of the ball
var x = canvas.width / 2;
var y = canvas.height - 30;

// controls how many pixels the ball will move on every update
var dx = 2;
var dy = -2;

// ball dimensions
var ballRadius = 10;
var beginAngle = 0;
var endAngle = 2 * Math.PI;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, beginAngle, endAngle);
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.closePath();
}

function checkWallCollision() {
	if(y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
		dy = -dy;
	}
	if(x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
		dx = -dx;
	}
}

function draw() {
	// clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// draw the ball
	drawBall();

	// detect collisions
	checkWallCollision();

	// set the next position for the ball
	x += dx;
	y += dy;
}