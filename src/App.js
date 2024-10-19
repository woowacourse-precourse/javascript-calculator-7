import { Console } from '@woowacourse/mission-utils';
import { CALCULATOR_MESSAGE, ERROR_MESSAGE } from './constants.js';
import {
  failCharSeparator,
  failCustomEndIndex,
  failIsNumbers,
  failVaildSeparator,
  failNumberRange,
} from './validation.js';

class App {
  async run() {
    await this.enterInput();

    try {
      this.calculateResult();
      this.printResult();
    } catch (error) {
      throw error;
    }
  }

  async enterInput() {
    this.input = await Console.readLineAsync(
      CALCULATOR_MESSAGE.CALCULATOR_START
    );
  }

  printResult() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_RESULT + this.sum);
  }

  calculateResult() {
    const numbers = this.splitInput();

    if (numbers.length === 1 && numbers[0] === '') {
      this.sum = 0;
      return;
    }

    this.checkNumbers(numbers);
    this.sum = numbers.reduce((acc, cur) => acc + Number(cur), 0);
  }

  splitInput() {
    if (this.input.startsWith('//')) {
      const customEndIndex = this.input.indexOf('\\n');
      const separator = this.input.slice(2, customEndIndex);
      const separatedInput = this.input.slice(customEndIndex + 2);

      this.checkSeperator(customEndIndex, separator);
      return separatedInput.split(separator);
    }

    return this.input.split(/,|:/);
  }

  checkSeperator(customEndIndex, seperator) {
    if (failCustomEndIndex(customEndIndex)) {
      throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_END);
    }
    if (failCharSeparator(seperator)) {
      throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    }
  }

  checkNumbers(Input) {
    if (failIsNumbers(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
    if (failVaildSeparator(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_SEPARATOR);
    }
    if (failNumberRange(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_RANGE);
    }
  }
}

export default App;
