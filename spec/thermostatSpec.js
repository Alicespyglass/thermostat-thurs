'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe( 'DEFAULT-TEMPERATURE', function() {
    it('has a default temperature of 20 degrees', function() {
      expect(thermostat.DEFAULTTEMPERATURE).toEqual(20);
    });
  });

});
