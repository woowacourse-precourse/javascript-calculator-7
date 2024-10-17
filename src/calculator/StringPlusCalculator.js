import hasCustomDelimiter from './hasCustomDelimiter.js';

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
      if (escapeInput[idx] === ' ') {
        throw new Error('[ERROR] 커스텀 구분자에 공백이 포함될 수 없습니다.');
      }
      customDelimiter += input[idx];
    }
    this.delimiter.push(customDelimiter);
  }
}

export default StringPlusCalculator;
