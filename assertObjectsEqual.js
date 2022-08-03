const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
  }
}

module.exports = assertObjectsEqual;