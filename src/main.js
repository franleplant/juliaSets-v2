(function () {

  function Fractal_module() {

    this.c = [-0.8 , 0.3];
    this.k = 10;
    this.fase = 150;
    this.MAX_ITER = 256;

    this.n = 250;
    this.m = 250;

    this.step = 1/this.n;
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


  require('./canvas')(Fractal_module);
  require('./calc')(Fractal_module);
  require('./utils/norm')(Fractal_module);


  

  //kick start
  var context = new Fractal_module();
  require('./fractal').call(context);



})();
