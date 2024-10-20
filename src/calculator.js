import emptyChecker from './empty_checker.js';
import getDelimiter from './get_delimiter.js';
import validator from './validator.js';
import separator from './separator.js';
import summation from './summation.js';

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
