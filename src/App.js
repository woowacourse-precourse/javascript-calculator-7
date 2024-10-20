import { Console } from '@woowacourse/mission-utils';

import { PRINT_MESSAGES, ERROR_MESSAGES } from './constants.js';

const customDelimiterRegex = /\/\/(.*?)\\n/;
const customDelimitersRegex = /\/\/(.*?)\\n/g;

class App {
  constructor() {
    this.delimiters = [',', ':'];
  }

  async run() {
    const input = await this.getInputForAddition();
    const inputWithoutSpace = this.removeSpace(input);

    if (this.isCustomDelimiterExist(inputWithoutSpace)) {
      this.validateCustomDelimiterPosition(inputWithoutSpace);

      const customDelimiters = this.extractCustomDelimiters(inputWithoutSpace);
      this.delimiters.push(...customDelimiters);
    }

    const inputWithoutCustomDelimiters =
      this.removeCustomDelimiters(inputWithoutSpace);

    const separatedInput = this.separateInput(inputWithoutCustomDelimiters);

    this.validateAdditionNumbers(separatedInput);

    this.printResult(separatedInput);
  }

  async getInputForAddition() {
    const input = await Console.readLineAsync(
      PRINT_MESSAGES.ENTER_ADDITION_STRING
    );

    return input;
  }

  removeSpace(input) {
    return input.replace(/\s/g, '');
  }

  isCustomDelimiterExist(input) {
    return customDelimiterRegex.test(input);
  }

  extractCustomDelimiters(input) {
    const customDelimiters = Array.from(
      input.matchAll(customDelimitersRegex),
      (m) => m[1]
    );

    this.validateCustomDelimiters(customDelimiters);

    return customDelimiters;
  }

  removeCustomDelimiters(input) {
    return input.replace(customDelimitersRegex, '');
  }

  separateInput(input) {
    const separationRegex = new RegExp(`[${this.delimiters.join('')}]`);
    return input.split(separationRegex).map((char) => Number(char));
  }

  printResult(input) {
    const result = input.reduce((acc, cur) => acc + cur * 10, 0) / 10;

    Console.print(`${PRINT_MESSAGES.FINAL_RESULT}${result}`);
  }

  validateAdditionNumbers(additionArray) {
    additionArray.forEach((num) => {
      // 배열에 NaN인 값이 있으면 첫 입력에 잘못된 값이 포함되어 있다는 의미
      if (isNaN(num)) {
        throw new Error(ERROR_MESSAGES.WRONG_INPUT);
      }

      if (num <= 0) {
        throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
      }
    });
  }

  validateCustomDelimiters(customDelimiters) {
    const symbolRegex = /[!@#$%^&*()?";{}|<>]/;

    customDelimiters.forEach((delimiter) => {
      if (delimiter.length !== 1) {
        throw new Error(ERROR_MESSAGES.WRONG_SYMBOL_LENGTH);
      }

      if (this.delimiters.includes(delimiter)) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_SYMBOL);
      }

      if (!symbolRegex.test(delimiter)) {
        throw new Error(ERROR_MESSAGES.WRONG_SYMBOL_TYPE);
      }
    });
  }

  validateCustomDelimiterPosition(input) {
    if (!input.startsWith('//')) {
      throw new Error(ERROR_MESSAGES.WRONG_POSITION);
    }
    const splitArray = input.split(/\/\/.*?\\n/).filter((str) => str !== '');

    if (splitArray.length > 1) {
      throw new Error(ERROR_MESSAGES.WRONG_POSITION);
    }

    if (input.endsWith('\\n')) {
      throw new Error(ERROR_MESSAGES.WRONG_POSITION);
    }
  }
}

export default App;
