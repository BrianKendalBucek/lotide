const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

// const ab = { a: "1", b: "2", c: "3", d: "3"};
// const ba = { b: "2", a: "1", c: "3" };

// const ab = { a: "1", b: "2", c: "3" };
// const ba = { b: "2", a: "1", c: "3", d: "3" };

assertEqual(eqObjects(ab, ba), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqArrays(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2), false); // => false