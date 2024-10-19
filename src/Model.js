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
}