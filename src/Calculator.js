import { Regex } from './constant.js';
import { Console } from '@woowacourse/mission-utils';

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
      this.delimiters.push(customDelimiter);
    }

    const delimiterRex = this.generateRegexFromDelimiters(input);
    Console.print(delimiterRex);
    return input.replace(Regex.customDelimiter, '').split(delimiterRex);
  }

  add() {
    return this.numbers.reduce((acc, delimiter) => acc + Number(delimiter), 0);
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
