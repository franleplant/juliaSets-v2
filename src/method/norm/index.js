module.exports = function (Constructor) {
	
	Constructor.prototype.norm = function norm(x,y) {
		return Math.sqrt(Math.pow(x, 2) + Math.pow(y,2))
	}

}