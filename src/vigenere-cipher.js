const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  encrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') throw new Error ('Incorrect arguments!');

    let temp = [];
    let result = [];
    let substr = str.split('').map(item => item.toUpperCase()).filter(item => this.alphabet.includes(item)).join('');
    key = key.split('').map(item => item.toUpperCase()).join('');

    for (let i = 0; i < substr.length; i++) {
      let strLetter = substr[i];
      let keyLetter;
      let indexLetter;
      let indexKey;
      let index;

      indexLetter = this.alphabet.indexOf(strLetter);
      keyLetter = key[i % key.length];
      indexKey = this.alphabet.indexOf(keyLetter);
      index = (indexLetter + indexKey) % this.alphabet.length;
      temp.push(this.alphabet[index]); 
    }
    temp = temp.reverse();
    
    for (let item of str) {
      if (this.alphabet.includes(item.toUpperCase())) result.push(temp.pop())
      else result.push(item);
    }
    
    if (!this.direct) result = result.reverse();
    
    return result.join('');
  }

  decrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') throw new Error ('Incorrect arguments!');

    let temp = [];
    let result = [];
    let substr = str.split('').map(item => item.toUpperCase()).filter(item => this.alphabet.includes(item)).join('');
    key = key.split('').map(item => item.toUpperCase()).join('');

    for (let i = 0; i < substr.length; i++) {
      let strLetter = substr[i];
      let keyLetter;
      let indexLetter;
      let indexKey;
      let index;

      indexLetter = this.alphabet.indexOf(strLetter);
      keyLetter = key[i % key.length];
      indexKey = this.alphabet.indexOf(keyLetter);
      index = (this.alphabet.length + indexLetter - indexKey) % this.alphabet.length;
      temp.push(this.alphabet[index]); 
    }
    temp = temp.reverse();

    for (let item of str) {
      if (this.alphabet.includes(item.toUpperCase())) result.push(temp.pop())
      else result.push(item);
    }
    
    if (!this.direct) result = result.reverse();
    
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
