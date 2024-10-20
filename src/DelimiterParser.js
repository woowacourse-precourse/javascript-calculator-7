import extractNumbers from './numberExtractor.js';

class DelimiterParser {
  constructor(input) {
    this.input = input;
    this.value = this.extractNumbers();
  }

  extractNumbers() {
    return extractNumbers(this.input);
  }

  getNumbers() {
    return this.value;
  }
}

export default DelimiterParser;
