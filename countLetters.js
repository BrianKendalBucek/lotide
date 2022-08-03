const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

//and return a count of each of the letters in that sentence
// const result = countLetters("lighthouse in the house")
// console.log(result);
// assertEqual(result.l, 1);