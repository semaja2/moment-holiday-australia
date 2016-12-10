var moment = require('moment')
var assert = require('assert');
require('../index')

describe('Holiday extensions', function() {

  it('should return true for 26th December 2016', function(done) {
    var result = moment('2016-12-26').isOnAustralianHoliday()
    assert.deepEqual(result, true)
    done();
  });

  it('should return false for 11th December 2016', function(done) {
    var result = moment('2016-12-11').isOnAustralianHoliday()
    assert.deepEqual(result, false)
    done()
  });

  it('should return false for 1pm 24th December 2016', function(done) {
    var result = moment('2016-12-24 13:00').isDuringAustralianHoliday()
    assert.deepEqual(result, false)
    done()
  });

  it('should return true for 8pm 24th December 2016', function(done) {
    var result = moment('2016-12-24 20:00').isDuringAustralianHoliday()
    assert.deepEqual(result, true)
    done()
  });

})
