import { Regex } from './constant.js';
import { errorMessages } from './constant.js';

class Calculator {
  constructor(input) {
    this.delimiters = [',', ':'];
    this.input = input;
    this.numbers = this.splitByDelimiter(input);
  }

  splitByDelimiter(input) {
    const customDelimiter = this.extractCustomDelimiter(input);

    if (customDelimiter) {
      if (this.delimiters.includes(customDelimiter)) {
        throw Error(errorMessages.duplicatedDelimiter);
      }

      this.delimiters.push(customDelimiter);
    }

    const delimiterRex = this.generateRegexFromDelimiters(input);
    const result = input.replace(Regex.customDelimiter, '').split(delimiterRex);

    return result;
  }

  add() {
    const result = this.numbers.reduce((acc, delimiter) => acc + Number(delimiter), 0);

    if (!result) {
      throw Error(errorMessages.invalidDelimiter);
    }

    return result;
  }

  extractCustomDelimiter(input) {
    const match = input.match(Regex.customDelimiter);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  generateRegexFromDelimiters(input) {
    const escapedDelimiters = this.delimiters.map((delimiter) => `${delimiter}`).join('');
    return new RegExp(`[${escapedDelimiters}]`);
  }
}

export default Calculator;
