# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bradwilliams1990/lotide`

**Require it:**

`const _ = require('@bradwilliams1990/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* 'without(source, itemsToRemove)': Takes in an array, and items to be removed. Returns array with items specified removed.
* 'takeUntil(array, callback)': Takes in an array and a callback function. Will return all items in the array until the callback parameter has been met.
* 'tail(array)' : Takes in array and returns all items in array except array[0];
* 'middle(array)': Takes in array and returns with middle index of array if oddly numbered, and two most middle if evenly numbered.
* 'map(array, callback)': Takes in an array and returns a new array based on the results of the callback fucntion.
* 'letterPositions(string)': Takes in a string and returns all the indices in the string where each character is found.
* 'head(array)': Takes in a array and returns the first index of the array.
* 'findKeyByValue(obj, val)': Takes in an object, and a value. Returns the first key in the object that matches the value given.
* 'findKey(object, callback)': Takes in an object, returns the first key that the callback function return true, if no key found, returns undefined.
* 'eqObjects(object1, object2)': Takes in two objects, returns true if both objects are equal(same keys and values), returns false otherwise.
* 'eqArrays(array1, array2)': Takes in two arrays, returns true if both arrays are equal (same values at same index), returns false otherwise.
* 'countOnly(allItems, itemsToCount)': Takes in an array of objects, returns an object containing counts of everything the input object listed.
* 'countLetters(string)': Takes in a string, returns a object showing all the letters in the string and how many times it occurs.
* 'assertObjectsEqual(actual, expected)': Assertion test for the eqObjects function.
* 'assertEqual(actual, expected)': Basic assertion test if actual === expected inputs.
* 'assertArraysEqual(array1, array2)': Assertion test for eqArrays function. 
