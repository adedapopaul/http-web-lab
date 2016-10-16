'use strict'

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should give 10, when 5 is passed", function() {
    assert(lib.sum_of_primes(5))===10;
  });
 
  });
  