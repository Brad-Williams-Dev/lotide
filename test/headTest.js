
const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(head([1]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head('hello'), 'helli');