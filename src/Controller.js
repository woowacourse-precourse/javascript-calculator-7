import { StringCalculator } from './StringCalculator.js';
import { UserInterface } from './UserInterface.js';
import { ValidateError } from './ValidateError.js';

const user = new UserInterface();
const calculator = new StringCalculator();

export class Controller {
  constructor() {
    this.inputString;
    this.delimiter = [',', ':'];
    this.valueString;
    this.values;
    this.sumValue;
  }
  async getUserInput() {
    this.inputString = await user.getInputString();
  }
  separateInput() {
    if (this.inputString.startsWith('//')) {
      try {
        ValidateError.validateCustomDelimiterFormat(this.inputString);
      } catch (err) {
        throw new Error('[ERROR] ' + err.message);
      }
      const { customDelimiter, valueString } =
        calculator.separateCustomDelimiter(this.inputString);
      this.delimiter.push(customDelimiter);
      this.valueString = valueString;
    } else {
      this.valueString = this.inputString;
    }
  }
  extractValues() {
    this.values = calculator.extractValues(this.delimiter, this.valueString);
  }
  validateValues() {
    try {
      ValidateError.validateNoNegativeNumbers(this.values);
      ValidateError.validateAllowedDelimiters(this.values);
      ValidateError.validateNonEmptySplitValues(this.values);
    } catch (err) {
      throw new Error('[ERROR] ' + err.message);
    }
  }
  getTotalSum() {
    this.sumValue = calculator.calculateSum(this.values);
  }

  showResult() {
    user.printResult(this.sumValue);
  }
}
