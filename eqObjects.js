const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if(Object.entries(object1).length !== Object.entries(object2).length) {
    return false;
  }
  for (const check of Object.entries(object1)) {
    if(object2[check[0]] !== object1[check[0]]){
      return false;
    }  
  }
  return true;
};

module.exports = eqObjects;
