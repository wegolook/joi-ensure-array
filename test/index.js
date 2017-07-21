'use strict';

// Load modules

const Lab = require('lab');
const Code = require('code');

const JoiEnsureArray = require('../');
const Joi = require('joi').extend(JoiEnsureArray);

// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;




describe('array().ensure()', () => {

  it('does not fail on undefined', (done) => {
    Joi.array().sparse().ensure().validate(undefined, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([undefined])
      done();
    });
  });

  it('works on null', (done) => {
    Joi.array().ensure().validate(null, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([null]);
      done();
    });
  });

  it('works on boolean', (done) => {
    Joi.array().ensure().validate(true, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([true]);
    });

    Joi.array().ensure().validate(false, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([false]);
    });

    done();
  });

  it('keeps existing array', (done) => {
    Joi.array().ensure().validate([1], (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([1]);
      done();
    });
  });

  it('works with string', (done) => {
    Joi.array().ensure().validate('hi', (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal(['hi']);
      done();
    });
  });

  it('works with a number', (done) => {

    Joi.array().ensure().validate(2, (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal([2]);
      done();
    });
  });

  it('fails on invalid input and convert disabled', (done) => {
    Joi.array().ensure().options({ convert: false }).validate('my string', (err, value) => {
      expect(err).to.exist();
      expect(value).to.equal('my string');
      done();
    });
  });

  it('fails on invalid input when ensure() is not called', (done) => {
    Joi.array().validate('my string', (err, value) => {
      expect(err).to.exist();
      expect(value).to.equal('my string');
      done();
    });
  });

  it('succeeds on valid input when ensure() in not called', (done) => {
    Joi.array().validate(['my string'], (err, value) => {
      expect(err).to.be.null();
      expect(value).to.equal(['my string']);
      done();
    });
  });
});
