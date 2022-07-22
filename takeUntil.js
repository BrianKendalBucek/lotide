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


// will take in 2 parameters
//1. the array to work with
//2. the callback (which Lodash calls "predicate")
// the funciton will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.
// To keep things simple, the callback should only be provided one value: The item in the array.
// Impliment takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

// Expected Input
const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    callback(item);
    return results.push(callback(item));
    // callback(item);
    // if (callback(item)) {
    //   return;
    // }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// console.log();
//Function

// Expected Output
// [1, 2, 5, 7, 2]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
