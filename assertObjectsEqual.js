
const eqObjects = function(object1, object2) {

  let obj1Keys = Object.keys(object1);

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const item of obj1Keys) {

    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      eqArrays(object1[item], object2[item]);
    } else {

      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let isEqual = eqObjects(actual, expected);

  if (!isEqual) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2", c: "12", e: "3" }, { b: "2", a: "1", e: "3", c: "12" });