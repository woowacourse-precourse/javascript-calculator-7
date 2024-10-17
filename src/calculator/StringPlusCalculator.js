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
    const newlineReplacedInput = input.replace(/\\n/, '\n');
    for (let idx = 2; idx < newlineReplacedInput.length; idx += 1) {
      if (newlineReplacedInput[idx] === '\n') {
        break;
      }
      if (newlineReplacedInput[idx] === ' ') {
        throw new Error('[ERROR] 커스텀 구분자에 공백이 포함될 수 없습니다.');
      }
      const asciiCode = newlineReplacedInput[idx].charCodeAt();
      if (asciiCode >= 48 && asciiCode <= 57) {
        throw new Error('[ERROR] 커스텀 구분자에 숫자가 포함될 수 없습니다.');
      }
      customDelimiter += newlineReplacedInput[idx];
    }
    this.delimiter.push(customDelimiter);
  }
}

export default StringPlusCalculator;
