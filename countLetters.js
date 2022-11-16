const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = function(str) {
  let string = str.replaceAll(' ', '').toLowerCase();
  let result = {};

  for (const letter of string) {

    if (!result[letter]) {
      result[letter] = 0;
    }

    result[letter]++;

  }
  return result;
};

console.log(countLetters('lighthouse in the house'));