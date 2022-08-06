const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it("Should return ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("Should return ['r', 'o', 'o', 'a', 'o'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[1]), ['r', 'o', 'o', 'a', 'o']);
  });
  it("Should return ['o', 'n', undefined, 'j', 'm'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[2]), ['o', 'n', undefined, 'j', 'm']);
  });
  it("Should return [] for when passed an empty array", () => {
    assert.deepEqual(map([], word => word[0]), []);
  });
});