const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("Should return { Fang: 2, Jason: 1 } for { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }), { Fang: 2, Jason: 1 });
  });
  it("Should return { Salima: 2, Joe: 1 } for { 'Salima': true, 'Joe': true, 'Fang': false, 'Agouhanna': false }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Salima': true, 'Joe': true, 'Fang': false, 'Agouhanna': false }), { Salima: 2, Joe: 1 });
  });
  it("Should return {} for { 'Brian': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Brian': true }), {});
  });
});