import { Console } from '@woowacourse/mission-utils';
import { validateEmptyInput, validateNegativeNumbers, validateInvalidNumbers } from './validators.js';
import { printMessage } from './utils.js';

class Calculator {
  constructor() {
    this.defaultDelimiters = [':', ','];
  }

  async getInput() {
    const answer = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    validateEmptyInput(answer);
    const customDelimiter = this.getCustomDelimiter(answer);
    const result = this.splitByDelimiter(answer, customDelimiter);
    this.sumArray(result);
  }

  getCustomDelimiter(input) {
    const customDelimiterPattern = /^\/\/(.+)\\n/;
    return input.match(customDelimiterPattern);
  }

  splitByDelimiter(input, customDelimiter) {
    let remainingInput = input;

    if (customDelimiter) {
      const customDelimiterValue = customDelimiter[1];
      remainingInput = input.slice(customDelimiter[0].length);
      this.defaultDelimiters.push(customDelimiterValue);
    }

    const escapedDelimiters = this.defaultDelimiters.map(d =>
      d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );

    const regex = new RegExp(escapedDelimiters.join('|'), 'g');
    return remainingInput.split(regex);
  }

  sumArray(arr) {
    validateNegativeNumbers(arr);
    validateInvalidNumbers(arr);
    const sum = arr
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);

    printMessage(`결과 : ${sum}`);
    return sum;
  }

  async run() {
    try {
      await this.getInput();
    } catch (error) {
      throw new Error(`Calculator Error: ${error.message}`);
    }
  }
}

export default Calculator;
