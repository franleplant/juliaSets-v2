module.exports = function init() {
  var canvas = document.getElementsByTagName('canvas')[0];

  canvas.width = this.n;
  canvas.height = this.m;
  

  this.canvas = canvas.getContext("2d");
}


