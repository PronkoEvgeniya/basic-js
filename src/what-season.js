const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  if (arguments.length === 0) return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== '[object Date]' || Object.getOwnPropertySymbols(date).length !== 0) throw new Error('Invalid date!');
  let month = date.getMonth();
  let season = {
    'winter': [0, 1, 11],
    'spring': [3, 4, 2],
    'summer': [6, 7, 5],
    'autumn': [9, 10, 8]
  }
  for (let [result, currMonth] of Object.entries(season)) {
    if (currMonth.includes(month)) {
      return result
    }
  }
}

module.exports = {
  getSeason
};
