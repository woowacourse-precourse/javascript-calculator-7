import { Console } from '@woowacourse/mission-utils';
import { CALCULATOR_MESSAGE, ERROR_MESSAGE } from './constants.js';
import {
  failCharSeparator,
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

  calculateResult() {
    const numbers = this.splitInput().map((number) =>
      number === '' ? 0 : number
    );

    this.checkNumbers(numbers);
    this.sum = numbers.reduce((acc, cur) => acc + Number(cur), 0);
  }

  splitInput() {
    if (this.input.startsWith('//')) {
      const [customSeparator, separatedInput] = this.input
        .slice(2)
        .split('\\n');

      this.checkSeperator(customSeparator);
      return separatedInput.split(customSeparator);
    }

    return this.input.split(/,|:/);
  }

  printResult() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_RESULT + this.sum);
  }

  checkSeperator(seperator) {
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
