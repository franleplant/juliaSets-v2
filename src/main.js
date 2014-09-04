(function () {

  //constantes globales
  var MAX_ITER = 256;



  this.c = [-0.8 , 0.3];
  this.k = 10;
  this.fase = 150;

  var m = n = 250;
  
  this.n = n;
  this.m = m;

  //variables
  var i;
  var x,y;
  var xi, yi;
  var step = 1/n;
  var ini = 0 - step * (n/2);
  var set = [];



  require('./canvas/init').call(this);
  require('./canvas/draw_pixel').call(this);
  require('./color').call(this);
  require('./calc').call(this);


  


  //initialize array values
  for (y = 0; y < n; y++){
    set[y] = [];
    for(x = 0; x < m; x++) {
      //el array esta formado por [x,y, numero_de_iteraciones]
      set[y][x] = [ini + step * x, -(ini + step*y), 0 ]

    }
  }



  //TODO: refactor this into an other module and test it.
  //calculate and draw the fractal
  for (y = 0; y < n; y++){
    for(x = 0; x < m; x++) {
      for (i = 0; i < MAX_ITER; i++){

        //setting the inner most loop as the iteration loop makes
        //breaking it easier thus more performant
        if (this.calc.norm(set[y][x][0], set[y][x][1]) > 1) {
          this.draw_pixel(x, y, set[y][x][2]);
          break;
        }

        set[y][x][0] = this.calc.x(set[y][x][0],set[y][x][1]);
        set[y][x][1] = this.calc.y(set[y][x][0],set[y][x][1]);
        set[y][x][2] += 1;

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




































