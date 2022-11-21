const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleOfArray = [];
  let middleIndex = Math.floor(array.length / 2); //Gets the middle index of the array, if not a whole number, it rounds it up to the nearest whole number.

  if (array.length <= 2) { return middleOfArray; }; //Checks if the array has 2 numbers or less, then returns an empty array.

  if (array.length % 2 === 0) { //Checks if array has an even amount of numbers, then pushes the middleIndex - 1, then the middleIndex.
    middleOfArray.push(array[middleIndex - 1]);
    middleOfArray.push(array[middleIndex]);
  }

  if (array.length % 2 !== 0) { //Checks if array has an odd amount of numbers, then pushed the middleIndex.
    middleOfArray.push(array[middleIndex]);
  }

  return middleOfArray;

};

module.exports = middle;


