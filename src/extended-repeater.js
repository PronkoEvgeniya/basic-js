const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  options.addition === undefined ? options.addition = '' : options.addition = String(options.addition);
  if (!options.separator) {options.separator = '+'}
  if (!options.additionSeparator) {options.additionSeparator = '|'}
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  let addArr = [];
  if (options.addition) {
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addArr.push(options.addition)
  }
    addArr = addArr.join(options.additionSeparator)
    str = str + addArr  
  }
  if (options.repeatTimes) {
  let strArr = []
  
  for (let i = 0; i < options.repeatTimes; i++) {
    strArr.push(str)
  }
  str = strArr.join(options.separator)}
  return str
}
// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

module.exports = {
  repeater
};
