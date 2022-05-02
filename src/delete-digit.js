const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = [];
	for (let i = 0; i < String(n).length; i++) {
		let arr = String(n).split('');
		arr.splice(i, 1);
		let result = arr.join('');
		num.push(result)
	}
	num.sort((a, b) => a - b);
  
	return Number(num.pop())
}

module.exports = {
  deleteDigit
};
