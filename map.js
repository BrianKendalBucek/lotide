// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) {
//     console.log("They are equal");
//   } else {
//     console.log("They are not equal");
//   }
// };

// Our function will take in two arguments. An array to map. A callback function
//The function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[1]);
// const results3 = map(words, word => word[2]);

console.log(results1);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o']);
// assertArraysEqual(results3, ['o', 'n', undefined, 'j', 'm']);
