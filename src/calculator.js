import emptyChecker from './calculator_modules/empty_checker.js';
import getDelimiter from './calculator_modules/get_delimiter.js';
import validator from './validation/validator.js';
import separator from './calculator_modules/separator.js';
import summation from './calculator_modules/summation.js';

class Calculator {
  constructor(input) {
    this.input = input;
  }

  calculate() {
    if (emptyChecker(this.input)) {
      return 0;
    }

    const delimiter = getDelimiter(this.input);
    const validatedInput = validator(this.input);
    const separatedArr = separator(validatedInput, delimiter);
    
    return summation(separatedArr);
  }
}

export default Calculator;
