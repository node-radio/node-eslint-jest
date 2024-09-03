// Build a Car class! - 

function sum(a, b) {
    return a + b;
  }

  class Car {
    constructor(model, make) {
      this.make = make
      this.model = model
      this.odometer = 0
    }
    drive(distance) {
      this.odometer = this.odometer + distance
    }
  }
  
  module.exports = {
    sum,
    Car
  };