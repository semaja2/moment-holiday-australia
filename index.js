(function (root, factory) {
  'use strict';
  module.exports = factory(require('moment'));
}(this, function (moment) {
  'use strict';
  var holidays = []
  var ical = require('ical')
  var request = require('sync-request');
  var res = request('POST', 'http://www.safework.sa.gov.au/uploaded_files/holidayCalendar.ics', {
    'body' : 'nothing',
    'gzip': false
  });
  var ics_holidays = ical.parseICS(res.body.toString(''))

  for (var k in ics_holidays){
    if (ics_holidays.hasOwnProperty(k) && ics_holidays[k].start) {
      var ev = ics_holidays[k]
      holidays.push({
        date: moment(ev.start).format('YYYY-MM-DD'),
        start: ev.start,
        end: ev.end,
        name: ev.summary,
        description: ev.description
      })
    }
  }

  moment.fn.isOnAustralianHoliday = function(date) {
    if (holidays.length == 0) return
    for (var i = 0; i < holidays.length; i++) {
      var arr_date = holidays[i]
      if (this.isSame(moment(arr_date.date), 'day')) {
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
