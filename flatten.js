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