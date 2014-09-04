(function () {

  function Fractal_module() {


    this.c = [-0.8 , 0.232];
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


})();
