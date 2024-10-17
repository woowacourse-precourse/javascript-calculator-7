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
    this.number = 0;
    let sum = '';
    for (let idx = this.numberStartIdx; idx < input.length; idx += 1) {
      const asciiCode = input[idx].charCodeAt();
      if (asciiCode < 48 || asciiCode > 57) {
        if (!this.delimiter.includes(input[idx])) {
          throw new Error('[ERROR] 등록되지 않은 구분자입니다.');
        }
        this.number += Number(sum);
        sum = '';
      } else {
        sum += input[idx];
      }
    }
    this.number += Number(sum);
  }

  addCustomDelimiter(input) {
    let customDelimiter = '';
    const newlineReplacedInput = input.replace(/\\n/, '\n');
    for (let idx = 2; idx < newlineReplacedInput.length; idx += 1) {
      if (newlineReplacedInput[idx] === '\n') {
        this.numberStartIdx = idx + 2;
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
