import { Console } from '@woowacourse/mission-utils';
import { validateEmptyInput, validateNegativeNumbers, validateInvalidNumbers } from './validators.js';
import { printMessage } from './utils.js';
import { LOG_MESSAGE, REGEX } from './constants.js';

class Calculator {
  constructor() {
    this.defaultDelimiters = [':', ','];
  }

  async getInput() {
    const answer = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
    validateEmptyInput(answer);
    const customDelimiter = this.getCustomDelimiter(answer);
    const result = this.splitByDelimiter(answer, customDelimiter);
    this.sumArray(result);
  }

  getCustomDelimiter(input) {
    return input.match(REGEX.CUSTOM_DELIMITER_PATTERN);
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

      printMessage(`${LOG_MESSAGE.RESULT_MESSAGE}${sum}`);
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
