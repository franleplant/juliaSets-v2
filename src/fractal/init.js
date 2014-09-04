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