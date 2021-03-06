# moment-holiday-australia
Extends the moment library with functions to determine if a moment occurs during a South Australian public holiday

Public holiday data is stored inside module as of 0.2.0, data will be updated for future dates in module updates

Retrieving public holiday data from a web source will be returned in a future update

## Example

```js
var moment = require('moment')
require('moment-holiday-australia')

// Check if there is a public holiday on that date
moment('2016-12-26').isOnAustralianHoliday() // Returns true
moment('2016-12-26').isOnAustralianHoliday() // Returns false

// Check if that moment occurs during a public holiday, used to test for part-day public holiday
moment('2016-12-24 20:00').isDuringAustralianHoliday() // returns true as Christmas Eve occurs between 7PM and 12AM
moment('2016-12-24 13:00').isDuringAustralianHoliday() // returns false as Christmas Eve occurs between 7PM and 12AM

```
