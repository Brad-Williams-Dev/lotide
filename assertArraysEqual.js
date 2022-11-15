const eqArrays = function (array1, array2) {

  let isTrue = false;

  let count = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }
  count === array1.length ? console.log('✅✅✅ Arrays Match!') : console.log(`🛑🛑🛑 Arrays Don't Match!`);
};





console.log(eqArrays([1, '2', 3], [1, '2', 3]));