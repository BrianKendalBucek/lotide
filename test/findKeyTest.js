const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  let names = {
    "Blue Hill": {
      stars: 1
    },
    "Akaleri": {
      stars: 3
    },
    "noma": {
      stars: 2
    },
    "elBulli": {
      stars: 3
    },
    "Ora": {
      stars: 2
    },
    "Akelarre": {
      stars: 3
    }
  };

  it(`Should return 'Blue Hill' when passed ${names} object and (x => x.stars === 1) as callback function`, () => {
    assert.strictEqual(findKey(names, x => x.stars === 1), "Blue Hill");
  });
  it(`Should return 'Akaleri' when passed ${names} object and (x => x.stars === 3) as callback function`, () => {
    assert.strictEqual(findKey(names, x => x.stars === 3), "Akaleri");
  });
  it(`Should return 'noma' when passed ${names} object and (x => x.stars === 2) as callback function`, () => {
    assert.strictEqual(findKey(names, x => x.stars === 2), "noma");
  });
});
