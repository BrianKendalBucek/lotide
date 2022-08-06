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

module.exports = middle;