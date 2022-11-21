const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2)
    ? console.log('✅✅✅ Arrays Match!')
    : console.log(`🛑🛑🛑 Arrays Don't Match!`);
};

const eqArrays = function(array1, array2) {
  let count = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }
  return count === array1.length ? true : false;
};

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;

// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);