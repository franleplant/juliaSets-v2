var test = require('tape');

var calc = require('./calc');

console.log(calc)

test('calc.x', function (t) {
    t.plan(8);


    var context = {
    	c: [1, 1]
    }


    //for all x=y then the result is C[0] 
    t.equal( calc.x.call(context, 1, 1),  context.c[0]);
    t.equal( calc.x.call(context, 3, 3),  context.c[0]);
    t.equal( calc.x.call(context, 5, 5),  context.c[0]);
    t.equal( calc.x.call(context, 0.2, 0.2),  context.c[0]);
    t.equal( calc.x.call(context, 0.1, 0.1),  context.c[0]);

    //random x and y
    t.equal( calc.x.call(context, 2, 1),  4);
    t.equal( calc.x.call(context, 5, 4),  10);
    t.equal( calc.x.call(context, 1, 3),  -7);


});


test('calc.norm', function (t) {
    t.plan(3);



    t.equal( calc.norm(0, 0),  0);
    t.equal( calc.norm(1,1),  Math.sqrt(2));
    t.equal( calc.norm(3, 4),  5);

    


});