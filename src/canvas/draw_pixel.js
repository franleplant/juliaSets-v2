module.exports = function () {

	this.draw_pixel = function draw_pixel(x,y,i) {
	    
	  	this.canvas.fillStyle = this.color(i);
	  	this.canvas.fillRect(x,y,1,1);
	};

}