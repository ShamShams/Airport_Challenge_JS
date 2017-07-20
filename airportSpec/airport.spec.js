describe('AirportChallenge', function() {
  let airport;
  let plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  })

  it("plane can land at airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
