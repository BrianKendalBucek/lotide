// function eqArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function assertArraysEqual(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log("They are equal");
//   } else {
//     console.log("They are not equal");
//   }
// }

const middle = array => {
 
  let middleValues = [];

  if (array.length === 1 || array.length === 2) {
    return middleValues;
  } else if (array.length % 2 === 0) {

    let evenArray = (array.length - 1) / 2;
    let intDown = Math.floor(evenArray);
    let intUp = Math.ceil(evenArray);

    middleValues.push(array[intDown]);
    middleValues.push(array[intUp]);

    return middleValues;

  } else {
    let oddArray = (array.length - 1) / 2;
    middleValues.push(array[oddArray]);
    return middleValues;
  }
};

//console.log(middle([2, 3, 4, 5, 6, 7]));