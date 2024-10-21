import { DELIMITERS, MESSAGES } from './constants.js';
import InputParser from './InputParser.js';
import NumberValidator from './NumberValidator.js';

export default class StringCalculator {
  constructor(inputParser, numberValidator) {
    this.inputParser = inputParser;
    this.numberValidator = numberValidator;
  }

  calculate(input) {
    if (input === '') {
      return 0;
    }

    const { numbers, delimiter } = this.inputParser.parse(input);
    const numberArray = this.parseNumbers(numbers, delimiter);
    return this.sum(numberArray);
  }

  parseNumbers(numbers, delimiter) {
    return numbers.split(delimiter).map(num => {
      const parsedNum = parseInt(num.trim(), 10);
      this.numberValidator.validate(parsedNum);
      return parsedNum;
    });
  }

  sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}