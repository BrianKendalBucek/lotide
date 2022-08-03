const eqObjects = require('./eqObjects');

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