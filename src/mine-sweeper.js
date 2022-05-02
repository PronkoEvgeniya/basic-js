const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map(() => [0, 0, 0]);
	matrix.forEach((item, index) => {
		for (let i = 0; i < item.length; i++) {
			if (matrix[index - 1] && matrix[index - 1][i - 1]) result[index][i]++;
			if (matrix[index - 1] && matrix[index - 1][i]) result[index][i]++;
			if (matrix[index - 1] && matrix[index - 1][i + 1]) result[index][i]++;
			if (matrix[index] && matrix[index][i - 1]) result[index][i]++;
			if (matrix[index] && matrix[index][i + 1]) result[index][i]++;
			if (matrix[index + 1] && matrix[index + 1][i - 1]) result[index][i]++;
			if (matrix[index + 1] && matrix[index + 1][i]) result[index][i]++;
			if (matrix[index + 1] && matrix[index + 1][i + 1]) result[index][i]++;
		}
	})
	return result;
}

module.exports = {
  minesweeper
};
