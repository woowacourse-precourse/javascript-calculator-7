import { PROMPT_MESSAGES, ERROR_MESSAGES } from './constants/messages.js';
import { DEFAULT_DELIMITER } from './constants/delimiter.js';
import { Console } from '@woowacourse/mission-utils';
import utils from './util/utils.js';

class App {
  async run() {
    try {
      const inputs = await Console.readLineAsync(
        PROMPT_MESSAGES.INPUT_ADDITION_STRING
      );
      const formattedInput = inputs.replace('\\n', '\n').trim();
      const result = this.calculator(formattedInput);
      return await Console.print(result);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }

  calculator(input) {
    this.validateInput(input);
    if (this.isDefaultDelimiter(input)) {
      const numbers = this.splitByDefaultDelimiter(input);
      this.validateNumbers(numbers);
      const result = this.sumNumbers(numbers);
      return `결과 : ${result}`;
    } else if (this.isCustomDelimiter(input)) {
      const numbers = this.splitByCustomDelimiter(input);
      this.validateNumbers(numbers);
      const result = this.sumNumbers(numbers);
      return `결과 : ${result}`;
    }
  }

  splitByDefaultDelimiter(input) {
    const delimiter = DEFAULT_DELIMITER.join('|');
    const regex = new RegExp(delimiter);
    const numbersArray = this.getSplitString(input, regex);
    return numbersArray;
  }

  splitByCustomDelimiter(string) {
    const escapedString = utils.escapeRegExp(string);
    const delimiter = this.getCustomDelimiter(escapedString);
    const parsedNumbersString = this.getNumbersAfterNewline(escapedString);
    const numbersArray = this.getSplitString(parsedNumbersString, delimiter);
    return numbersArray;
  }

  getCustomDelimiter(string) {
    const newlineIndex = this.getNewLineIndex(string);
    if (newlineIndex !== -1) {
      return string.slice(2, newlineIndex);
    }
    return null;
  }

  getSplitString(string, delimiter) {
    return string.split(delimiter);
  }

  isStartsSlash(string) {
    return string.startsWith('//');
  }

  isIncludesNewLine(string) {
    return string.includes('\n');
  }

  getNumbersAfterNewline(string) {
    const newlineIndex = this.getNewLineIndex(string);
    return string.slice(newlineIndex + 1);
  }

  isEmptyString(numbers) {
    if (!numbers || numbers.trim() === '') {
      return true;
    }
  }

  isDefaultDelimiter(numbers) {
    const regex = /^[-0-9,:\s]+$/;
    return regex.test(numbers);
  }

  isCustomDelimiter(string) {
    return this.isStartsSlash(string) && this.isIncludesNewLine(string);
  }

  getNewLineIndex(string) {
    const newlineIndex = string.indexOf('\n');
    return newlineIndex;
  }

  sumNumbers(numbers) {
    const result = numbers
      .map((number) => Number(number))
      .reduce((acc, cur) => acc + cur, 0);
    return result;
  }

  validateInput(input) {
    if (this.isEmptyString(input)) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    if (!this.isDefaultDelimiter(input) && !this.isCustomDelimiter(input)) {
      throw new Error(ERROR_MESSAGES.MISSING_DELIMITER);
    }
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      if (number < 0) {
        throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
      }
      if (Number.isNaN(number)) {
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
      }
    });
  }
}

export default App;
