const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

const sentence = "apple";

const result = letterPositions("hello");

assertArraysEqual(letterPositions("apple").a, [0]);
assertArraysEqual(letterPositions("apple").p, [1, 2]);
assertArraysEqual(letterPositions("apple").l, [3]);
assertArraysEqual(letterPositions("apple").e, [4]);