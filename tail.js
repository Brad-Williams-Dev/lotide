const assertEqual = function (actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`) : console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
};


const tail = function (array) {
  let answer = array.slice(1);
  if (answer.length === 0) {
    return answer;
  } else if (answer.length === 1) {
    return answer;
  } else {
    return answer;
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const test = tail([]);
const test1 = tail(["Hello"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(test.length, 0);
assertEqual(test1.length, 0);



