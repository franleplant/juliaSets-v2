'use strict';

module.exports = function (Constructor) {
	
	Constructor.prototype.calc_x = function calc_x(x,y) {
			return Math.pow(x, 2) - Math.pow(y, 2) + this.c[0];
		};
		
	Constructor.prototype.calc_y =  function calc_y(x,y) {
  			return 2*x*y + this.c[1];
		};
}
	
