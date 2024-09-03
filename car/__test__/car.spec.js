// Test away!

const { sum, Car } = require('../car');

describe('intro to testing', () => { 
  it('[1] sanity', () => {
    expect(true).not.toBe(false);
  })

  it('[2] test: adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
})

describe('Car class', () => {
  let prius
  beforeEach(() => {
    prius = new Car('prius', 'toyota')
  });

  it.todo('[3] exists');
  it.todo('[4] has a model prop prius');
  it.todo('[5] has a make prop totota');
  it.todo('[6] has an odometer at 0 miles');
  it.todo('[7] has a drive method that takes distance and inc odometer');
  it.todo('[8] more todo list');
})
