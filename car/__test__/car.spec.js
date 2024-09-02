// Test away!

const sum = require('../car');

describe('intro to testing', () => { 
  it('[1] sanity', () => {
    expect(true).not.toBe(false);
  })

  it('[2] test: adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
})
