const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("They are equal");
  } else {
    console.log("They are not equal");
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual([1, 2, 3], [1, 2, 4])
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4])