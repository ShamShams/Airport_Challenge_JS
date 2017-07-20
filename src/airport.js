function Airport() {
  this._planes = []; // '._plaines' pour différencier de .plaines
};

Airport.prototype.planes = function () {
  return this._planes;
};
// fonction pour voir ce qui est à l'intérieur de this._planes.

Airport.prototype.clearForLanding = function (plane) {
  this._planes.push(plane);
};
