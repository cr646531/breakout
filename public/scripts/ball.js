export default class Ball {
	constructor(radius = 10, color = "blue", sAngle = 0, eAngle = 2 * Math.PI, dx = 2, dy = -2) {
		this.radius = radius;
		this.color = color;
		this.sAngle = sAngle;
		this.eAngle = eAngle;
		this.dx = dx;
		this.dy = dy;
	}

	increaseSpeed() {
		this.dx += .25;
		this.dy -= .25;
	}
}