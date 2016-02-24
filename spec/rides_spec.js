var rides = require("../lib/rides.js")

describe('Rides', function(){
  it('determines if the child is tall enough to go on the ride', function(){
    var child1 = {
      height: 3,
      name: "Julian",
      age:3
    };

    var child2 = {
      height: 4,
      name: "Cero",
      age: 4
    };

    var ride1 = {
      minHeight: 3,
      maxHeight: 7
    };

    var ride2 = {
      minHeight: 4,
      maxHeight: 7
    };

    expect(rides.isTallEnough()).toEqual(true);
  });
});
