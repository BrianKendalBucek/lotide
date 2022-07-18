// const assertEqual = (actual, expected) => {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     return;
//   }

//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };

//Create a function called countLetters
//should take in a sentence (as a string)
//and return a count of each of the letters in that sentence

const countLetters = str => {
  const results = {};

  for (const char of str) {

    if (char === ' ') {
      continue;
    }

    if (!results[char]) {
      results[char] = 0;
    }

    results[char] ++;
  }
  return results;
};

// const result = countLetters("lighthouse in the house")
// console.log(result);
// assertEqual(result.l, 1);