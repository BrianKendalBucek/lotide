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

//function which will return all the indices (zero-based positions) in the string where each character is found.
//for each letter, instead of returning just one number to represent its number of occurrences,
// multiple numbers may be needed to represent all the places in the string that shows up.

const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// const sentence = "apple";

// const result = letterPositons("hello");
// // console.log(result);
// assertArraysEqual(letterPositions("apple").a, [0]);
// assertArraysEqual(letterPositions("apple").p, [1, 2]);
// assertArraysEqual(letterPositions("apple").l, [3]);
// assertArraysEqual(letterPositions("apple").e, [4]);