/*
1. 구분자들을 기준으로 string들을 나눠 배열을 만드는 로직
2. 배열을 숫자로 바꿔 합을 내놓는 로직
*/
import Validator from '../utils/Validator.js';

class NumberProcessor {
  static getNumberArray(string, customDelimiter) {
    const delimiters = [',', ':', customDelimiter];
    const regex = new RegExp(`[${delimiters.join('')}]`);
    const parsedString = string.split(regex);
    Validator.checkArray(parsedString);
    const parsedNumbers = parsedString.map(a => parseInt(a, 10));

    return parsedNumbers;
  }

  static sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  static process(string, customDelimiter) {
    const numbers = NumberProcessor.getNumberArray(string, customDelimiter);
    return NumberProcessor.sumNumbers(numbers);
  }
}

export default NumberProcessor;
