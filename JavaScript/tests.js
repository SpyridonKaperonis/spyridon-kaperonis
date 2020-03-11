QUnit.module('MAIN MODULE', {})

QUnit.test( "add test", assert => {
    assert.equal(addT(1,1), 2, 'Positive integers')
    assert.equal(addT(-1,-1), -2, 'Negative Integers')
    assert.equal(addT(-1, 1), 0 , "Mixed")
  });

QUnit.test("substract test", assert =>{
    assert.equal(substractT(5, 2),3, 'Positive Integers')
    assert.equal(substractT(-2, -3), 5, 'Negative Integers')
    assert.equal(substractT(-2, 2), 0, 'Mixed')
});

QUnit.test("Multiply test", assert =>{
    assert.equal(mult(1, 1), 1, 'Positive Integers')
    assert.equal(mult(-2, -2), 4, 'Negative Integers')
    assert.equal(mult(-2, 2), -4, 'Mixed')
});

QUnit.test("division test", assert=>{
    assert.equal(division(1,1), 1, 'Positive Integers')
    assert.equal(division(-10, -2), 5, 'Negative Integers')
    assert.equal(division(-10, 2), -5, 'Mixed')
});




