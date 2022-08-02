const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("They are equal");
  } else {
    console.log("They are not equal");
  }
};

module.exports = assertArraysEqual;