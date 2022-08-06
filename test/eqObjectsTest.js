const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("Should return true when passed eqObjects({ a: 1, b: 2 }, { b: 2, a: 1 })", () => {
    assert.strictEqual(eqObjects({ a: 1, b: 2 }, { b: 2, a: 1 }), true);
  });
  it("Should return false when passed eqObjects({ a: 1, b: 2, c: 3 }, { b: 2, a: 1 })", () => {
    assert.strictEqual(eqObjects({ a: 1, b: 2, c: 3 }, { b: 2, a: 1 }), false);
  });
  it("Should return true when passed eqObjects({ a: 1, b: 2, c: 3 }, { c: 3, b: 2, a: 1 })", () => {
    assert.strictEqual(eqObjects({ a: 1, b: 2, c: 3 }, { c: 3, b: 2, a: 1 }), true);
  });
  it("Should return false when passed eqObjects({ c: 1, d: [2, 3] }, { b: 2, a: 1 })", () => {
    assert.strictEqual(eqObjects({ c: 1, d: [2, 3] }, { b: 2, a: 1 }), false);
  });
  it("Should return true when passed eqObjects({ a: 1, b: [2, 3] }, { b: [2, 3], a: 1 })", () => {
    assert.strictEqual(eqObjects({ a: 1, b: [2, 3] }, { b: [2, 3], a: 1 }), true);
  });
  it("Should return true when passed eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' })", () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  })
  it("Should return false when passed eqObjects({ c: '1', d: ['2', 3] }, { c: '1', d: ['2;, '3'] })", () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", "3"] }), false);
  })
  // it("Should return true when passed eqObjects({ a: { c: 1 }, b: 2 }, { a: { c: 1 }, b: 2 })", () => {
  //   assert.strictEqual(eqObjects({ a: { c: 1 }, b: 2 }, { a: { c: 1 }, b: 2 }), true);
  // }); Will use this test when doing the stretch project requiring recursion for nested objects check.
});