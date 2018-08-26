/* globals describe it */

const should = require('chai').should();
const countries = require('../dist/');

describe('Locales', () => {
  countries.forEach((country) => {
    it(`${country.text} - It has a correct format`, () => {
      country.should.be.an('object');
    });
  });
});
