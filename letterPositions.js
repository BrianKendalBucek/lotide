const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = letterPositions;

//function which will return all the indices (zero-based positions) in the string where each character is found.
//for each letter, instead of returning just one number to represent its number of occurrences,
// multiple numbers may be needed to represent all the places in the string that shows up.


