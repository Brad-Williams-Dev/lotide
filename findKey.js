const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`)
    : console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
};

const findKey = function(object, callback) {


  for (const key in object) {

    if (callback(object[key])) {
      return key;
    }
  }
};


const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};


assertEqual(findKey(obj, x => x.stars === 2), 'noma');
assertEqual(findKey(obj, x => x.stars === 1), 'Blue Hill');
assertEqual(findKey(obj, x => x.stars === 3), 'Akaleri');