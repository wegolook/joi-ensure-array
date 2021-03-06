'use strict';

// Load modules

const Lab = require('@hapi/lab');
const Code = require('@hapi/code');

const JoiEnsureArray = require('../');
const Joi = require('@hapi/joi').extend(JoiEnsureArray);

// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;




describe('array().ensure()', () => {

  it('does not fail on undefined', () => {
    Joi.array().sparse().ensure().validate(undefined, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([undefined])
    });
  });

  it('works on null', () => {
    Joi.array().ensure().validate(null, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([null]);
    });
  });

  it('works on boolean', () => {
    Joi.array().ensure().validate(true, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([true]);
    });

    Joi.array().ensure().validate(false, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([false]);
    });
  });

  it('keeps existing array', () => {
    Joi.array().ensure().validate([1], (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([1]);
    });
  });

  it('works with string', () => {
    Joi.array().ensure().validate('hi', (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal(['hi']);
    });
  });

  it('works with a number', () => {

    Joi.array().ensure().validate(2, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([2]);
    });
  });

  it('fails on invalid input and convert disabled', () => {
    Joi.array().ensure().options({ convert: false }).validate('my string', (err, value) => {
      expect(err).to.exist();
      expect(value).to.equal('my string');
    });
  });

  it('fails on invalid input when ensure() is not called', () => {
    Joi.array().validate('my string', (err, value) => {
      expect(err).to.exist();
      expect(value).to.equal('my string');
    });
  });

  it('succeeds on valid input when ensure() in not called', () => {
    Joi.array().validate(['my string'], (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal(['my string']);
    });
  });
});
