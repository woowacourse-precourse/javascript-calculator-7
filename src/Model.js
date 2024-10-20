import Validator from "./utils/Validator.js";
import Parser from './utils/Parser.js';

export default class Model {
  extractNumbers(input) {
    Validator.validateEmptyInput(input);

    const numbers = (input.startsWith('//')) ?
      Parser.customDelimiter(input) :
      Parser.standardDelimiter(input)

    return numbers;
  }

  total(numbers) {
    Validator.validateIsNumber(numbers);
    return numbers.reduce((total, number) => total + parseInt(number, 10), 0);
  }
}