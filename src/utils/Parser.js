import Validator from './Validator.js';

export default class Parser {

  static standardDelimiter(text) {
    const numbers = text.split(/[,:]/);
    Validator.validateNegative(numbers);

    return numbers;
  }

  static customDelimiter(input) {

    Validator.validateIsSplit(input);
    const [delimiterStr, numbersStr] = input.split('\\n');
    const customDelimiter = delimiterStr.slice(2);

    const numbersArray = numbersStr.split(customDelimiter);
    Validator.validateNegative(numbersArray);

    return numbersArray;
  }
}