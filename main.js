(function () {

//constantes globales
var MAX_ITER = 30;

this.c = [-0.8 ,0];
this.k = 8;
this.fase = 210;

var m = n = 200;
//no idea what those parameters are



//variables
var i;
var x,y;
var xi, yi;
var step = 1/n;
var ini = 0 - step * (n/2);
var set = [];




var canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = n;
	canvas.height = m;
	canvas = canvas.getContext("2d");


var color = require('./color');
var calc = require('./calc');

function draw_pixel(x,y,i) {

	canvas.fillStyle = color.call(this, i);
	canvas.fillRect(x,y,1,1);
};


//initialize array values
for (y = 0; y < n; y++){
  set[y] = [];
  for(x = 0; x < m; x++) {
    //el array esta formado por [x,y, numero_de_iteraciones]
    set[y][x] = [ini + step * x, -(ini + step*y), 0 ]

  }
}

console.log(set)



//calculate and draw the fractal
for (y = 0; y < n; y++){
  for(x = 0; x < m; x++) {
    for (i = 0; i < MAX_ITER; i++){

    	xi = calc.x.call(this,set[y][x][0],set[y][x][1]);
    	yi = calc.y.call(this,set[y][x][0],set[y][x][1]);

      set[y][x][0] = xi;
      set[y][x][1] = yi
      set[y][x][2] = i;
      //setting the inner most loop as the iteration loop makes
      //breaking it easier thus more performant
      if (calc.norm(xi, yi) > 1) {
        draw_pixel.call(this, set[y][x][0], set[y][x][1], set[y][x][2]);
        break;
      }
    }
  }
}




}).call({})
















/*
var hsv = function (i) {

	return {
		h: k * i % 360,
		s: 100,
		v: 85
	}

};
*/




































