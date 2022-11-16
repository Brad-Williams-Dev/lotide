const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
};


const countOnly = function(allItems, itemsToCount) {
  let result = {};

  for (const item of allItems) {

    if (!itemsToCount[item]) {
      continue;
    }

    if (!result[item]) {
      result[item] = 0;
    }

    result[item]++;
  }

  console.log(result);
  return result;
};

// TEST CODE!
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
