'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe( 'DEFAULT-TEMPERATURE', function() {
    it('has a default temperature of 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#up', function() {
    it('increase temperature by 1 degree', function () {
      thermostat.up;
      expect(thermostat.temperature).toEqual(21);
    });
  });

});
