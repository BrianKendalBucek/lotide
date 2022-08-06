const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.entries(object1).length !== Object.entries(object2).length) {
    return false;
  }
  for (const check of Object.entries(object1)) {
    console.log(check);
    if (Array.isArray(object2[check[0]]) && Array.isArray(object1[check[0]])) {
      return eqArrays(object1[check[0]], object2[check[0]]);
    } else if(object2[check[0]] !== object1[check[0]]) {
      return false;
    }  
  }
  return true;

};

module.exports = eqObjects;
