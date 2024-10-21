import { Console } from '@woowacourse/mission-utils';
import {
  CALCULATOR_MESSAGE,
  EMPTY_STRING,
  ERROR_MESSAGE,
} from './constants.js';
import {
  isValidCharSeparator,
  isValidCustomEndIndex,
  isValidIsOperands,
  isValidVaildSeparator,
  isValidOperandRange,
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
    const operands = this.splitInput();

    if (operands.length === 1 && operands[0] === EMPTY_STRING) {
      this.sum = 0;
      return;
    }

    this.validateOperands(operands);
    this.sum = operands.reduce((acc, cur) => acc + Number(cur), 0);
  }

  splitInput() {
    if (this.input.startsWith('//')) {
      const customEndIndex = this.input.indexOf('\\n');
      const separator = this.input.slice(2, customEndIndex);
      const separatedInput = this.input.slice(customEndIndex + 2);

      this.validateSeperator(customEndIndex, separator);
      return separatedInput.split(separator);
    }

    return this.input.split(/,|:/);
  }

  validateSeperator(customEndIndex, seperator) {
    if (!isValidCustomEndIndex(customEndIndex)) {
      throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_END);
    }
    if (!isValidCharSeparator(seperator)) {
      throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    }
  }

  validateOperands(Input) {
    if (!isValidIsOperands(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
    if (!isValidVaildSeparator(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_SEPARATOR);
    }
    if (!isValidOperandRange(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_RANGE);
    }
  }
}

export default App;
