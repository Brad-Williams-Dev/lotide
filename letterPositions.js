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
  let count = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }
  count === array1.length ? console.log('✅✅✅ Arrays Match!') : console.log(`🛑🛑🛑 Arrays Don't Match!`);
};


const letterPositions = function(sentence) {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] === ' ') {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
      continue;
    }
    if (sentence[i] === ' ') {
      continue;
    }

    results[sentence[i]].push(i);
  }

  return results;
};

module.exports = letterPositions;

// console.log(letterPositions('lighthouse in the house'));
