const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = array => {
  let flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flatArray.push(...element);
      continue;
    }

    flatArray.push(element);
  }
  return flatArray;
};

module.exports = flatten;

// const array = [1, 2, [3, 4], 5, [6]];
// const result = flatten(array);
// console.log(result);