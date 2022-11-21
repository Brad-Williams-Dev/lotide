const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
const test = tail([]);
const test1 = tail(["Hello"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(test.length, 0);
assertEqual(test1.length, 0);