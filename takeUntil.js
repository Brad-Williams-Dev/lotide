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


const takeUntil = function(array, callback) {
  const result = [];

  for (let item of array) {

    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']));