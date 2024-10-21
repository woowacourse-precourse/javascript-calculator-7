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
      const numbers = this.parseInput(input);
      this.validateNumbers(numbers);
      const sum = this.sumArray(numbers);
      printMessage(`${LOG_MESSAGE.RESULT_MESSAGE}${sum}`);
    } catch (error) {
      throw new Error(`Calculator Error: ${error.message}`);
    }
  }

  async getInput() {
    const answer = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
    validateEmptyInput(answer);
    return answer;
  }

  parseInput(input) {
    const processedInput = this.processCustomDelimiter(input);
    return this.splitByDelimiter(processedInput);
  }

  processCustomDelimiter(input) {
    const customDelimiterMatch = input.match(REGEX.CUSTOM_DELIMITER_PATTERN);
    if (customDelimiterMatch) {
      this.addCustomDelimiter(customDelimiterMatch[1]);
      return input.slice(customDelimiterMatch[0].length);;
    }
    return input;
  }

  addCustomDelimiter(delimiter) {
    this.defaultDelimiters.push(delimiter);
  }

  splitByDelimiter(input) {
    const regex = this.createDelimiterRegex();
    return input.split(regex);
  }

  createDelimiterRegex() {
    const escapedDelimiters = escapeRegexSpecialChars(this.defaultDelimiters);
    return new RegExp(escapedDelimiters.join('|'), 'g');
  }

  validateNumbers(arr) {
    validateNegativeNumbers(arr);
    validateInvalidNumbers(arr);
  }

  sumArray(arr) {
    return arr.map(Number).reduce((acc, curr) => acc + curr, 0);
  }

}

export default Calculator;
