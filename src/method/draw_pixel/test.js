var test = require('tape');


var called = false;

function Constructor() {
	this.color = function(i) {return 'red'};
	this.canvas = {
		fillStyle: '',
		fillRect: function(x,y, size_x, size_y){ 
			called = true
		}
	};
};

require('./index')(Constructor);

var obj = new Constructor();


test('draw_pixel method', function (t) {
    t.plan(2);

    obj.draw_pixel(0, 0, 0);

    t.equal( obj.canvas.fillStyle,  'red');
    t.equal( called,  true);
});
