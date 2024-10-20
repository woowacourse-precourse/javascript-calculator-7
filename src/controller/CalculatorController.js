import { Console } from '@woowacourse/mission-utils';
import StringCalculator from '../model/StringCalculator.js';
import Validator from '../model/Validator.js';

export default class CalculatorController {
  static async processInput(input) {
    let numbers = '';

    if (input.startsWith('//')) {
      const validationResult =
        Validator.validateInputCharsWithCustomDelim(input);
      if (validationResult === 0) {
        return 0;
      }
      const customDelimiter = input[2];
      const delimiter = new RegExp(`[${customDelimiter},:]`);

      const cleanInput = input.split('\\n')[1];

      Validator.validateNumAfterCustomDelim(cleanInput, delimiter);
      numbers = StringCalculator.extractNumbers(cleanInput, delimiter);
    } else {
      Validator.validateInputChars(input);
      const delimiter = /[,:]/;
      Validator.validateIsNumber(input);
      numbers = StringCalculator.extractNumbers(input, delimiter);
      Console.print(`numbers ${numbers}`);
    }

    return StringCalculator.sum(numbers);
  }
}
