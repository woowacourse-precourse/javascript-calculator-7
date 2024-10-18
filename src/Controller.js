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
      ValidateError.validateCustomDelimiterFormat(this.inputString);
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
    ValidateError.validateNoNegativeNumbers(this.values);
    ValidateError.validateAllowedDelimiters(this.values);
    ValidateError.validateNonEmptySplitValues(this.values);
  }
  getTotalSum() {
    this.sumValue = calculator.calculateSum(this.values);
  }
}
