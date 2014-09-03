(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/flp/Code/juliaSets-v2/src/calc/index.js":[function(require,module,exports){
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


module.exports = {
	x: calc_x,
	y: calc_y,
	norm: norm
}

},{}],"/home/flp/Code/juliaSets-v2/src/color/index.js":[function(require,module,exports){
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



var hsvToRgb = function (h, s, v) {
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


function color(i) {

	var c = hsvToRgb( (this.k * i  + this.fase) % 360 , 100, 90 );

	return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
};

module.exports = color;
},{}],"/home/flp/Code/juliaSets-v2/src/main.js":[function(require,module,exports){
(function () {

  //constantes globales
  var MAX_ITER = 100;

  this.c = [0.285 ,0];
  this.k = 8;
  this.fase = 210;

  var m = n = 250;
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


  //implicit binding
  this.color = require('./color');

  //TODO: refactor this module and improve the way it is appended
  var calc = require('./calc');

  this.calc = {
    x: calc.x.bind(this),
    y: calc.y.bind(this),
    norm: calc.norm.bind(this)
  }

  this.draw_pixel = function draw_pixel(x,y,i) {

    debugger;    
  	canvas.fillStyle = this.color(i);
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


console.log(set[20])

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





































},{"./calc":"/home/flp/Code/juliaSets-v2/src/calc/index.js","./color":"/home/flp/Code/juliaSets-v2/src/color/index.js"}]},{},["/home/flp/Code/juliaSets-v2/src/main.js"]);
