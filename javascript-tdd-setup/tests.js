'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should give 10, when 5 is passed", function() {
    assert(
      lib.sum_of_primes(5)==10;
  });
 
  });
  it("should give 10 when 7 is passed", function() {
    assert(
      lib.sum_of_primes(7)==17
    );
  });

  it("should give 10 when 78 is passed", function() {
    assert(
      lib.sum_of_primes(8)==17
    );
  });

it("should give 10 when 9 is passed", function() {
    assert(
      lib.sum_of_primes(9)==17
    );
  });


 it("should give 17 when 10 is passed", function() {
    assert(
      lib.sum_of_primes(10)==17
    );


it("should give 28 when 11 is passed", function() {
    assert(
      lib.sum_of_primes(11)==28
    );
  });

it("should give 28 when 12 is passed", function() {
    assert(
      lib.sum_of_primes(12)==28
    );
  });

it("should give 28 when 13 is passed", function() {
    assert(
      lib.sum_of_primes(13)==41
    );
  });

it("should give 31 when 14 is passed", function() {
    assert(
      lib.sum_of_primes(14)==31
    );
  });

it("should give 31 when 15 is passed", function() {
    assert(
      lib.sum_of_primes(15)==31
    );
  });

it("should give 31 when 16 is passed", function() {
    assert(lib.sum_of_primes(16)==31);
  });

it("should give invalid when negative  is passed", function() {
    assert(
      lib.sum_of_primes(-1)=="invalid"
    );
  });

it("should give invalid input when string is passed", function() {
    assert(
      lib.sum_of_primes("Dog")=="invalid"
    );
  });

it("should give Array is not allowed when Array is passed", function() {
    assert(
      lib.sum_of_primes(A)==false
    );
  });



});