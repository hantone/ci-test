'use strict';

const expect = require('expect');
const index = require('./index');

describe('when run an app', () => {
  it('should allow the request', () => {
    expect(index()).toBe(true);
  });
});
