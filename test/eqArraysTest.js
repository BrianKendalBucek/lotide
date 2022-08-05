const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("Should return true when passed eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("Should return false when passed eqArrays([1, 2, 3], [1, 2, 4])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });
  it("Should return false when passed eqArrays([1, 2, 4, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 4, 3], [1, 2, 3]), false);
  });
});