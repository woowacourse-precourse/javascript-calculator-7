import { Console } from '@woowacourse/mission-utils';
import StringCalculator from '../model/StringCalculator.js';
import Validator from '../model/Validator.js';

export default class CalculatorController {
  static async processInput(input) {
    let numbers = '';

    if (input.startsWith('//')) {
      const validationResult = Validator.validateNumAfterCustomDelim(input);
      if (validationResult === 0) {
        return 0;
      }
      const delimiter = input[2];
      Validator.validateInputCharsWithCustomDelim(input, delimiter);
      const cleanInput = input.split('\\n')[1];
      numbers = StringCalculator.extractNumbers(cleanInput, delimiter);
    } else {
      Validator.validateInputChars(input);
      const delimiter = /[,:]/;
      numbers = StringCalculator.extractNumbers(input, delimiter);
    }
  }
}
