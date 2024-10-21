import extractNumbers from './utils/numberExtractor.js';
import isValidateNumbers from './utils/validation.js';

class DelimiterParser {
  constructor(input) {
    this.input = input;
    this.value = this.extractNumbers();
  }

  extractNumbers() {
    const numbers = extractNumbers(this.input);
    isValidateNumbers(numbers);
    return numbers;
  }

  getNumbers() {
    return this.value;
  }
}

export default DelimiterParser;
