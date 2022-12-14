const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns '[]' for ['5']", () => {
    assert.deepEqual(middle(['5']), []);
  });

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });

  it("returns '[]' for '[]", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns '[]' for ['hello']", () => {
    assert.deepEqual(middle(['hello']), []);
  });

  it("returns '[4,5]' for [1, 2, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 4, 5, 6, 7]), [4, 5]);
  });

  it("returns '[4]' for [1, 2, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 4, 5, 6]), [4]);
  });
});