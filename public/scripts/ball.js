export default class Ball {
	constructor(x = 0, y = 0, radius = 10, color = "blue", dx = 2, dy = -2, status = 1) {

		this.x = x;
		this.y = y;

		this.radius = radius;
		this.color = color;


		this.sAngle = 0;
		this.eAngle = 2 * Math.PI;

		this.dx = dx;
		this.dy = dy;

		this.status = status;
	}

	increaseSpeed() {
		this.dx += .25;
		this.dy -= .25;
	}
}