var test = require('tape');

function Constructor() {};

require('./index')(Constructor);

var obj = new Constructor();


test('norm method', function (t) {
    t.plan(3);



    t.equal( obj.norm(0, 0),  0);
    t.equal( obj.norm(1,1),  Math.sqrt(2));
    t.equal( obj.norm(3, 4),  5);


});
