const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  const result = source.filter((element) => itemsToRemove.indexOf(element) === -1);
  return result;
}

module.exports = without;