import StringCalculator from '../model/StringCalculator.js';
import Validator from '../model/Validator.js';

export default class CalculatorController {
  static async processInput(input) {
    let numbers = '';

    if (input.startsWith('//')) {
      const validationResult =
        Validator.validateInputCharsWithCustomDelim(input);
      const customDelimiter = input[2];
      const delimiter = new RegExp(`[${customDelimiter},:]`);
      const cleanInput = input.split('\\n')[1];

      if (validationResult === 0) {
        return EMPTY_INPUT_SUM;
      }

      Validator.validateNumAfterCustomDelim(cleanInput, delimiter);
      numbers = StringCalculator.extractNumbers(cleanInput, delimiter);
    } else {
      const delimiter = /[,:]/;
      Validator.validateInputChars(input);
      Validator.validateIsNumber(input);
      numbers = StringCalculator.extractNumbers(input, delimiter);
    }

    return StringCalculator.sum(numbers);
  }
}
