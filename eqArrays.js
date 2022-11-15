const assertEqual = function (actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function (array1, array2) {

  let isTrue = false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[0 + i]) {
      isTrue = true
    } else {
      isTrue = false;
    }
    if (isTrue === false) {
      return false;
    }
  }
  return isTrue;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays([1, 2, 9], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);