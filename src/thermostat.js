'use strict';

function Thermostat() {

  var DEFAULTTEMPERATURE = 20

  this.temperature = DEFAULTTEMPERATURE

};


  Thermostat.prototype.up = function () {
    this.temperature += 1;
  };

  Thermostat.prototype.down = function() {
    this.temperature -= 1;
  };
