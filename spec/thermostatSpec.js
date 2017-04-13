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
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('#down', function() {
    it('decrease temperature by 1 degree', function () {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of 10 degrees', function () {
     thermostat.temperature = 10;
      expect(function() {thermostat.down()}).toThrowError("It's too cold!");
    });
  });

});
