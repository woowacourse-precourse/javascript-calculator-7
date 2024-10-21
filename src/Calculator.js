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
      const processedInput = this.processCustomDelimiter(input);
      const numbers = this.splitByDelimiter(processedInput);
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
