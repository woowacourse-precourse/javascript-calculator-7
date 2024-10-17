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
    const newCalculateString = this.replaceDelimitersToSpace(input);
    this.number = 0;
    let sum = '';
    for (let i = 0; i < newCalculateString.length; i += 1) {
      const char = newCalculateString[i];
      const asciiCode = char.charCodeAt();
      if (asciiCode < 48 || asciiCode > 57) {
        if (char === '-') {
          throw new Error('[ERROR] 숫자는 양수만 사용할 수 있습니다.');
        }
        if (char !== ' ') {
          throw new Error('[ERROR] 등록되지 않은 구분자입니다.');
        }
        this.number += Number(sum);
        sum = '';
      } else {
        sum += char;
      }
    }
    this.number += Number(sum);
  }

  replaceDelimitersToSpace(input) {
    const calculateString = input.slice(this.numberStartIdx);
    let newCalculateString = calculateString;
    for (let i = 0; i < this.delimiter.length; i += 1) {
      const delimiter = this.delimiter[i].replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&',
      );
      const regex = new RegExp(delimiter, 'g');
      newCalculateString = newCalculateString.replace(regex, ' ');
    }
    return newCalculateString;
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
