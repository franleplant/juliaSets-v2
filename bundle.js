(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/flp/Code/juliaSets-v2/src/calc/index.js":[function(require,module,exports){
'use strict';

module.exports = function (Constructor) {
	
	Constructor.prototype.calc_x = function calc_x(x,y) {
			return Math.pow(x, 2) - Math.pow(y, 2) + this.c[0];
		};
		
	Constructor.prototype.calc_y =  function calc_y(x,y) {
  			return 2*x*y + this.c[1];
		};
}
	

},{}],"/home/flp/Code/juliaSets-v2/src/main.js":[function(require,module,exports){
function Fractal_module() {


  this.c = [0.285 , 0];
  this.k = 20;
  this.fase = 250;
  this.MAX_ITER = 256;

  this.n = 500;
  this.m = this.n;

  this.boundary = 2;


  this.step = this.boundary/this.n;
  this.ini = 0 - this.step * (this.n/2);


  //variables
  this.i;
  this.x;
  this.y;
  this.xi; 
  this.yi;
  
  this.set = [];

  var canvas = document.getElementsByTagName('canvas')[0];

  canvas.width = this.n;
  canvas.height = this.m;
  

  this.canvas = canvas.getContext("2d");


  
}

//Methods!
require('./method/hsvToRgb')(Fractal_module);
require('./method/color')(Fractal_module);
require('./method/draw_pixel')(Fractal_module);
require('./method/norm')(Fractal_module);
require('./method/init_set')(Fractal_module);
require('./method/fractal')(Fractal_module);


require('./calc')(Fractal_module);





//kick start
var fractal_module = new Fractal_module();

fractal_module.fractal();




},{"./calc":"/home/flp/Code/juliaSets-v2/src/calc/index.js","./method/color":"/home/flp/Code/juliaSets-v2/src/method/color/index.js","./method/draw_pixel":"/home/flp/Code/juliaSets-v2/src/method/draw_pixel/index.js","./method/fractal":"/home/flp/Code/juliaSets-v2/src/method/fractal/index.js","./method/hsvToRgb":"/home/flp/Code/juliaSets-v2/src/method/hsvToRgb/index.js","./method/init_set":"/home/flp/Code/juliaSets-v2/src/method/init_set/index.js","./method/norm":"/home/flp/Code/juliaSets-v2/src/method/norm/index.js"}],"/home/flp/Code/juliaSets-v2/src/method/color/index.js":[function(require,module,exports){
module.exports = function (Constructor) {
	
	Constructor.prototype.color = function color(i) {

		//TODO: return black when i = 0;
		var c = this.hsvToRgb( (this.k * i  + this.fase) % 360 , 100, 90 );

		return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
	};
};
},{}],"/home/flp/Code/juliaSets-v2/src/method/draw_pixel/index.js":[function(require,module,exports){
module.exports = function (Constructor) {

	//TODO:
	//require('../color')(Constructor);



	Constructor.prototype.draw_pixel = function draw_pixel(x,y,i) {
	    
	  	this.canvas.fillStyle = this.color(i);
	  	this.canvas.fillRect(x,y,1,1);
	};

}
},{}],"/home/flp/Code/juliaSets-v2/src/method/fractal/index.js":[function(require,module,exports){
module.exports = function (Constructor) {

  Constructor.prototype.fractal = function () {

    this.init_set();

     //calculate and draw the fractal
    for (this.y = 0; this.y < this.n; this.y++){
      for(this.x = 0; this.x < this.m; this.x++) {
        for (this.i = 0; this.i < this.MAX_ITER; this.i++){

          //setting the inner most loop as the iteration loop makes
          //breaking it easier thus more performant
          if (this.norm(this.set[this.y][this.x][0], this.set[this.y][this.x][1]) > 2 || this.i + 1 === this.MAX_ITER) {
            this.draw_pixel(this.x, this.y, this.set[this.y][this.x][2]);
            break;
          }

          this.set[this.y][this.x][0] = this.calc_x(this.set[this.y][this.x][0],this.set[this.y][this.x][1]);
          this.set[this.y][this.x][1] = this.calc_y(this.set[this.y][this.x][0],this.set[this.y][this.x][1]);
          this.set[this.y][this.x][2] += 1;

        }
      }
    }


  }

}
},{}],"/home/flp/Code/juliaSets-v2/src/method/hsvToRgb/index.js":[function(require,module,exports){
/**
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 100
 * 
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 */

 //http://snipplr.com/view/14590

module.exports = function (Constructor) {




	Constructor.prototype.hsvToRgb = function hsvToRgb(h, s, v) {
		var r, g, b;
		var i;
		var f, p, q, t;
	 
		// Make sure our arguments stay in-range
		h = Math.max(0, Math.min(360, h));
		s = Math.max(0, Math.min(100, s));
		v = Math.max(0, Math.min(100, v));
	 
		// We accept saturation and value arguments from 0 to 100 because that's
		// how Photoshop represents those values. Internally, however, the
		// saturation and value are calculated from a range of 0 to 1. We make
		// That conversion here.
		s /= 100;
		v /= 100;
	 
		if(s == 0) {
			// Achromatic (grey)
			r = g = b = v;
			return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
		}
	 
		h /= 60; // sector 0 to 5
		i = Math.floor(h);
		f = h - i; // factorial part of h
		p = v * (1 - s);
		q = v * (1 - s * f);
		t = v * (1 - s * (1 - f));
	 
		switch(i) {
			case 0:
				r = v;
				g = t;
				b = p;
				break;
	 
			case 1:
				r = q;
				g = v;
				b = p;
				break;
	 
			case 2:
				r = p;
				g = v;
				b = t;
				break;
	 
			case 3:
				r = p;
				g = q;
				b = v;
				break;
	 
			case 4:
				r = t;
				g = p;
				b = v;
				break;
	 
			default: // case 5:
				r = v;
				g = p;
				b = q;
		}
	 

		return {
			r: Math.round(r * 255),
			g: Math.round(g * 255),
			b: Math.round(b * 255)
		};
		
	};
};
},{}],"/home/flp/Code/juliaSets-v2/src/method/init_set/index.js":[function(require,module,exports){
module.exports = function (Constructor) {

	//initialize array values
	Constructor.prototype.init_set = function () {
		  for (this.y = 0; this.y < this.n; this.y++){
		    this.set[this.y] = [];
		    for(this.x = 0; this.x < this.m; this.x++) {
		      //el array esta formado por [this.x,y, numero_de_iteraciones]
		      this.set[this.y][this.x] = [this.ini + this.step * this.x, -(this.ini + this.step*this.y), 0 ]

		    }
		  }

	}
	  
	

}
},{}],"/home/flp/Code/juliaSets-v2/src/method/norm/index.js":[function(require,module,exports){
module.exports = function (Constructor) {
	
	Constructor.prototype.norm = function norm(x,y) {
		return Math.sqrt(Math.pow(x, 2) + Math.pow(y,2))
	}

}
},{}]},{},["/home/flp/Code/juliaSets-v2/src/main.js"]);
