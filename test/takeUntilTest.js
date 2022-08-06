const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("Should return [1, 2, 5, 7, 2] when passed [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  })
  it("Should return ['I've', 'been', 'to', 'Hollywood'] when passed ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
  })
})