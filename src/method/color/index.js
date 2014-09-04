module.exports = function (Constructor) {
	
	Constructor.prototype.color = function color(i) {

		var c = this.hsvToRgb( (this.k * i  + this.fase) % 360 , 100, 90 );

		return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
	};
};