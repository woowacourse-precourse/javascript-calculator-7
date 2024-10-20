import { Regex } from './constant.js';
import { Console } from '@woowacourse/mission-utils';
import { errorMessages } from './constant.js';

class Calculator {
  constructor(input) {
    this.delimiters = [',', ':'];
    this.input = input;
    this.numbers = this.splitByDelimiter(input);
    Console.print(this.numbers);
  }

  splitByDelimiter(input) {
    const customDelimiter = this.extractCustomDelimiter(input);

    if (customDelimiter) {
      if (this.delimiters.includes(customDelimiter)) {
        throw new Error(`[ERROR]: ${errorMessages.duplicatedDelimiter}`);
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
      throw new Error(`[ERROR]: ${errorMessages.invalidDelimiter}`);
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
