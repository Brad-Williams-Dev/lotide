const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2)
    ? console.log('✅✅✅ Arrays Match!')
    : console.log(`🛑🛑🛑 Arrays Don't Match!`);
};





console.log(assertArraysEqual([1, '2', 3], [1, '2', 3]));