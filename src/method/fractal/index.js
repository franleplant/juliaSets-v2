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