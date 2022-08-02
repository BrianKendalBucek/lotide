const assertEqual = require('./assertEqual');

// const assertEqual = (actual, expected) => {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     return;
//   }

//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual("Bootcamp", "Bootcamp");




//function to compare 2 arrays for a boolean result.
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
