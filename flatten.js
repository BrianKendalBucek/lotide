function eqArrays(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if(eqArrays(arr1, arr2)){
    console.log("They are equal");
  } else {
    console.log("They are not equal");
  }
}

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

// const array = [1, 2, [3, 4], 5, [6]];
// const result = flatten(array);
// console.log(result);