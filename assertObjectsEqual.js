const eqObjects = require('./eqObjects');

// const eqObjects = function(object1, object2) {
//   if(Object.entries(object1).length !== Object.entries(object2).length) {
//     return false;
//   }
//   for (const check of Object.entries(object1)) {
//   // let key = check[0];
//     if(object2[check[0]] !== object1[check[0]]){
//       return false;
//     }  
//   }
//   return true;
// };

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
  }
}

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const ab = { a: "1", b: "2", c: "3", d: "3"};
// const ba = { b: "2", a: "1", c: "3" };

// assertObjectsEqual(eqObjects(ab, ba), false);