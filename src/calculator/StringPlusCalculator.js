import replaceDelimitersToComma from '../utils/replaceDelimitersToComma.js';
import addCustomDelimiter from '../utils/addCustomDelimiter.js';

class StringPlusCalculator {
  constructor() {
    this.number = 0;
    this.delimiter = [',', ':'];
    this.numberStartIdx = 0;
  }

  calculate(input) {
    if (input.startsWith('//')) {
      this.delimiter = addCustomDelimiter(input, this.delimiter);
      this.numberStartIdx = input.indexOf('\\n') + 2;
    }
    const newCalculateString = replaceDelimitersToComma(
      input.slice(this.numberStartIdx),
      this.delimiter,
    );
    this.number = 0;
    let sum = '';
    for (let i = 0; i < newCalculateString.length; i += 1) {
      const char = newCalculateString[i];
      if (!/\d/.test(char)) {
        if (char === '-') {
          throw new Error('[ERROR] 숫자는 양수만 사용할 수 있습니다.');
        }
        if (char === ' ') {
          throw new Error('[ERROR] 공백이 포함될 수 없습니다.');
        }
        if (char !== ',') {
          throw new Error('[ERROR] 등록되지 않은 구분자입니다.');
        }
        this.number += Number(sum);
        sum = '';
      } else {
        sum += char;
      }
    }
    this.number += Number(sum);
    return this.number;
  }
}

export default StringPlusCalculator;
