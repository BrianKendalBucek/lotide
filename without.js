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


function without(source, itemsToRemove) {
  const result = source.filter((element) => itemsToRemove.indexOf(element) === -1);
  return result;
}