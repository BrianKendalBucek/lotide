const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  let letterPositionsTester = {
    a: [0],
    p: [1, 2],
    l: [3],
    e: [4]
  };
  it(`Should return ${letterPositionsTester} for 'apple'`, () => {
    assert.deepEqual(letterPositions("apple"), letterPositionsTester);
  });
  it(`Should return [1, 2] for letter p for 'apple'`, () => {
    assert.deepEqual(letterPositions("apple").p, [1, 2]);
  });
  it(`Should return {} when given an empty string`, () => {
    assert.deepEqual(letterPositions(""), {});
  });
});