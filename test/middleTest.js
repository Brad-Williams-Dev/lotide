const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
//PASSING TESTS
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 4, 5, 6]), [4]);
assertArraysEqual(middle([1, 2, 4, 5, 6, 7]), [4, 5]);
assertArraysEqual(middle([1, 2, 4, 3, 2, 5]), [4, 3]);

//FAILING TESTS

assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [1.5]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 4]);