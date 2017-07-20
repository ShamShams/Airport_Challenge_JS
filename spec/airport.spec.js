describe('AirportChallenge', function() {
  let airport;
  let plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    getWeather();
  })

  it("plane can land at airport when the weather is normal", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("plane can take off from airport when the weather is normal", function() {
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });
});
//
// describe('AirportChallenge with weather', function() {
//   it("plane can't take off when weather is stormy", function() {
//
//     expect(airport.planes()).to
//   });
// });
