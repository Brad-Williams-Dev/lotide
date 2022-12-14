const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2)
    ? console.log('✅✅✅ Arrays Match!')
    : console.log(`🛑🛑🛑 Arrays Don't Match!`);
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);


// const results1 = map(words, word => word[0]);
// console.log(results1);