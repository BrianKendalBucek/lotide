const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    romance: "ER",
    comedy: "Dumb and Dumber",
    drama:  "The Wire"
  };

  it(`should return 'drama' when passed ${bestTVShowsByGenre} and 'The Wire'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`should return undefined when passed ${bestTVShowsByGenre} and 'That '70s Show'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it(`should return 'romance' when passed ${bestTVShowsByGenre} and 'ER'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "ER"), "romance");
  });
  it(`should return 'comedy' when passed ${bestTVShowsByGenre}and 'Dumb and Dumber'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Dumb and Dumber"), "comedy");
  });
});