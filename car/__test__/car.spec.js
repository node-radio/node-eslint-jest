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

  it('[3] exists', () => {
    expect(Car).toBeDefined()
  });
  it('[4] has a model prop prius', () => {
    expect(prius).toHaveProperty('model', 'prius')
  });
  it('[5] has a make prop totota', () => {
    expect(prius.make).toBe('toyota')
  });
  it('[6] has an odometer at 0 miles', () => {
    // empty test is a false positive
    expect(prius.odometer).toBe(0)
  });
  it('[7] has a drive method that takes distance and inc odometer', () => {
    expect(prius.drive).toBeDefined()
    expect(prius.drive).toBe(Car.prototype.drive)

    prius.drive(30)
    expect(prius.odometer).toBe(30)
    prius.drive(50)
    expect(prius.odometer).toBe(80)
  });
  it.todo('[8] more todo list');
})
