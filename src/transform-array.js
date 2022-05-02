const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ('\'arr\' parameter must be an instance of the Array!')
  let dcdn = '--discard-next';
  let dcdp = '--discard-prev';
  let dbln = '--double-next';
  let dblp = '--double-prev';
  let result = [];
  let add = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== dcdn && arr[i] !== dcdp && arr[i] !== dbln && arr[i] !== dblp) {
      for (let j = 0; j < add; j++) {
        result.push(arr[i]);
      }  
      add = 1;   
    }
    if (arr[i] === dcdp) {
      result.pop();
      result.push(arr[i]);
    }
    if (arr[i] === dblp) {
      if (result.length > 0) result.push(result[result.length - 1]);
      result.push(arr[i]);
    }
    if (arr[i] === dcdn) {
      result.push(arr[i]);
      i++;
    }
    if (arr[i] === dbln ) {
      add++;
      result.push(arr[i]);
    }
  }

  return result.filter(item => item !== dcdn && item !== dcdp && item !== dbln && item !== dblp);
  }

module.exports = {
  transform
};
