import { EMPTY_INPUT_SUM } from '../constants/constants.js';
import StringCalculator from '../model/StringCalculator.js';
import Validator from '../model/Validator.js';

export default class CalculatorController {
  static async processInput(input) {
    const { cleanInput, delimiter } = this.getCleanInputAndDelimiter(input);

    const numbers = StringCalculator.extractNumbers(cleanInput, delimiter);
    if (!cleanInput || cleanInput.trim() === '') {
      return EMPTY_INPUT_SUM;
    }
    Validator.validateIsNumber(numbers);
    return StringCalculator.sum(numbers);
  }

  static getCleanInputAndDelimiter(input) {
    let cleanInput;
    let delimiter;
    if (input.startsWith('//')) {
      const customDelimiter = input[2];
      delimiter = new RegExp(`[${customDelimiter},:]`);
      cleanInput = input.split('\\n')[1];
      Validator.validateInputCharsWithCustomDelim(input);
      Validator.validateNumAfterCustomDelim(cleanInput, delimiter);
    } else {
      delimiter = /[,:]/;
      Validator.validateInputChars(input);
      cleanInput = input;
    }

    return { cleanInput, delimiter };
  }
}
