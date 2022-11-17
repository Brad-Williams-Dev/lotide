const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };



const abc = { a: "1", b: "2", c: "3" };
const cba = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, ab), true);
assertEqual(eqObjects(abc, cba), true);
assertEqual(eqObjects(cd, cd2), true);
