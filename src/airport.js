function Airport() {
  this._planes = [];
};

Airport.prototype.planes = function () {
  return this._planes;
};
// fonction pour voir ce qui est à l'intérieur de this._planes.

Airport.prototype.clearForLanding = function(plane) {
  this._planes.push(plane);
};

Airport.prototype.clearToTakeOff = function(plane) {
  this._planes.pop(plane);
};

// let weather;
// let random = Math.random();
//
// function getWeather() {
//   if(random < 0.8) {
//     weather = "stormy";
//   }
//     weather = "sunny"
//   }
//   return weather;
// }
