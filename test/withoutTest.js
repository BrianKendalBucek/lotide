const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("Should return [2, 3] when passed [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("Should return ['1', '2'] when passed ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
});