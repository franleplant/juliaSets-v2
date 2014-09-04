module.exports = function (Constructor) {

	require('../color')(Constructor);



	Constructor.prototype.draw_pixel = function draw_pixel(x,y,i) {
	    
	  	this.canvas.fillStyle = this.color(i);
	  	this.canvas.fillRect(x,y,1,1);
	};

}