const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
};

const findKeyByValue = function(obj, val) {
  let answer;
  for (const item in obj) {
    //console.log(obj[item]);
    if (obj[item] === val) {
      answer = item;
    }
  }
  return answer;
};




// TEST CODE //

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const bestTVShowsByGenre1 = {
  animated: "The Simpsons",
  comedy: "Brooklyn Nine-Nine",
  drama: "Everybody Loves Raymond"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre1, "The Simpsons"), 'animated');

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");