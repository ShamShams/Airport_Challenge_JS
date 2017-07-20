function Plane() {
  this.land = function(airport) {
    airport.clearForLanding(this);
  };
};
