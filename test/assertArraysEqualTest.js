const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


//TEST CODE
assertArraysEqual([1, '2', 3], [1, '2', 3]); // PASS
assertArraysEqual([1, '2', 2], [1, '2', 3]); //FAIL
assertArraysEqual([1, '2', 3, 4, 5, '6'], [1, '2', 3, 4, 5, '6']);//PASS
assertArraysEqual([1, 3, '2'], [1, '2', 3]);//FAIL