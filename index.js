(function (root, factory) {
  'use strict';
  module.exports = factory(require('moment'));
}(this, function (moment) {
  'use strict';
  var holidays = require('./holidayData.json').dates

  moment.fn.isOnAustralianHoliday = function(date) {
    if (holidays.length == 0) return
    for (var i = 0; i < holidays.length; i++) {
      var arr_date = holidays[i]
      if (this.isSame(moment(arr_date.start), 'day')) {
        return true
      }
    }
    return false
  }

  moment.fn.isDuringAustralianHoliday = function(date) {
    if (holidays.length == 0) return
    for (var i = 0; i < holidays.length; i++) {
      var arr_date = holidays[i]
      if (this.isBetween(moment(arr_date.start), moment(arr_date.end))) {
        return true
      }
    }
    return false
  }

  return moment;
}));
