const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
     if (
      position - 1 < 0 ||
      !Number.isInteger(position) ||
      position - 1 >= this.chain.length
    ) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let newArr = this.chain.join('~~');
    this.chain = [];
    return newArr
  }
};

module.exports = {
  chainMaker
};
