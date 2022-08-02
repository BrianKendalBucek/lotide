const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Implement the definition for function eqObjects which will
// take in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if(Object.entries(object1).length !== Object.entries(object2).length) {
    return false;
  }
  for (const check of Object.entries(object1)) {
  // let key = check[0];
    if(object2[check[0]] !== object1[check[0]]){
      return false;
    }  
  }
  return true;
};

module.exports = eqObjects;


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// // const ab = { a: "1", b: "2", c: "3", d: "3"};
// // const ba = { b: "2", a: "1", c: "3" };

// // const ab = { a: "1", b: "2", c: "3" };
// // const ba = { b: "2", a: "1", c: "3", d: "3" };

// assertEqual(eqObjects(ab, ba), true);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqArrays(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqArrays(eqObjects(cd, cd2), false); // => false