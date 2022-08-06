const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("Should return [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("Should return [8, 23, 5, 7, 1] when passed [[8], [23, 5], [7, 1]]", () => {
    assert.deepEqual(flatten([[8], [23, 5], [7, 1]]), [8, 23, 5, 7, 1]);
  });
  it("Should return an empty array when passed an empty array", () => {
    assert.deepEqual(flatten([]), []);
  });
});