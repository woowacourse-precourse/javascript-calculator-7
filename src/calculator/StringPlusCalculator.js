import hasCustomDelimiter from './hasCustomDelimiter';

class StringPlusCalculator {
  constructor() {
    this.number = 0;
    this.delimiter = [',', ':'];
    this.numberStartIdx = 0;
  }

  calculate(input) {
    if (hasCustomDelimiter(input)) {
      this.addCustomDelimiter(input);
    }
  }

  addCustomDelimiter(input) {
    let customDelimiter = '';
    const escapeInput = input.replace(/\\n/, '\n');
    for (let idx = 2; idx < escapeInput.length; idx += 1) {
      if (escapeInput[idx] === '\n') {
        break;
      }
      customDelimiter += input[idx];
    }
    this.delimiter.push(customDelimiter);
  }
}

export default StringPlusCalculator;
