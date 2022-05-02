const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArray = arr.filter(item => item !== -1).sort((a, b) => a - b);
	sortArray.unshift(0);
	let res = arr.map(item => {
		if (item === -1) {
			return item = -1
		} else {
			sortArray.shift()
			return item = sortArray[0];
		}
	})
	return res
}

module.exports = {
  sortByHeight
};
