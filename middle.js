const eqArrays = function(array1, array2) {

  let count = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }
  return count === array1.length ? true : false;
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

const middle = function(array) {
  let middleOfArray = [];
  let middleIndex = Math.floor(array.length / 2); //Gets the middle index of the array, if not a whole number, it rounds it up to the nearest whole number.

  if (array.length < 2) { return middleOfArray; }; //Checks if the array has 2 numbers or less, then returns an empty array.

  if (array.length % 2 === 0) { //Checks if array has an even amount of numbers, then pushes the middleIndex - 1, then the middleIndex.
    middleOfArray.push(array[middleIndex - 1]);
    middleOfArray.push(array[middleIndex]);
  }

  if (array.length % 2 !== 0) { //Checks if array has an odd amount of numbers, then pushed the middleIndex.
    middleOfArray.push(array[middleIndex]);
  }

  return middleOfArray;

};

// console.log(middle([1]));
// console.log(assertArraysEqual([1, 2, 3, 4], [1, 3, 4]));
// console.log(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]));

console.log(assertArraysEqual(middle([1, 2, 4]), middle([1, 2, 3, 4])));
