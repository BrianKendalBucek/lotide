const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { a: "1", b: "2", c: "3" };
const dc = { b: "2", a: "1", c: "4" };

assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(cd, dc), false);