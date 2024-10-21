import { Console } from '@woowacourse/mission-utils';
import { validateEmptyInput, validateNegativeNumbers, validateInvalidNumbers } from './validators.js';
import { printMessage, escapeRegexSpecialChars } from './utils.js';
import { LOG_MESSAGE, REGEX, DEFAULT_DELIMITERS } from './constants.js';

class Calculator {
  constructor() {
    this.defaultDelimiters = [...DEFAULT_DELIMITERS];
  }

  async run() {
    try {
      const input = await this.getInput();
      this.validateInput(input);
      const customDelimiter = this.getCustomDelimiter(input);
      const numbers = this.splitByDelimiter(input, customDelimiter);
      const sum = this.sumArray(numbers);
      printMessage(`${LOG_MESSAGE.RESULT_MESSAGE}${sum}`);
    } catch (error) {
      throw new Error(`Calculator Error: ${error.message}`);
    }
  }

  async getInput() {
    return await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
  }

  validateInput(input) {
    validateEmptyInput(input);
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

    const escapedDelimiters = escapeRegexSpecialChars(this.defaultDelimiters);

    const regex = new RegExp(escapedDelimiters.join('|'), 'g');
    return remainingInput.split(regex);
  }

  sumArray(arr) {
    validateNegativeNumbers(arr);
    validateInvalidNumbers(arr);
    const sum = arr
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

}

export default Calculator;
