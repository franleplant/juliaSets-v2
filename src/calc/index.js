'use strict';

//z^2
function calc_x(x,y) {
  return Math.pow(x, 2) - Math.pow(y, 2) + this.c[0];
}

function calc_y(x,y) {
  return 2*x*y + this.c[1];
}


function norm(x,y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y,2))
}


module.exports = function () {
	
	this.calc = {
		x: calc_x,
		y: calc_y,
		norm: norm		
	}
}
	
