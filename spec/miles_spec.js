var miles = require('../lib/miles')

describe('miles', function(){
  it('determines if a car has enough gas to travel a route', function(){
    var car = {
      milesPerGallon: 20,
      gallonsInTank: 3
    }
    var route = {
      miles: 200,
      destination: "Denver",
      location: "Fancy Land"
    }
    expect(miles.hasEnoughGas(car, route)).toEqual(false)
    car.gallonsInTank = 20;
    expect(miles.hasEnoughGas(car, route)).toEqual(true)
    car.gallonsInTank = 10;
    expect(miles.hasEnoughGas(car, route)).toEqual(true)
    car.gallonsInTank = 9.5;
    expect(miles.hasEnoughGas(car, route)).toEqual(false)
  });
})
