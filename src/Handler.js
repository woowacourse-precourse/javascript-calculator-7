import { MESSAGES, SEPARATOR } from './constants.js';
import Validator from './Validator.js';

class Handler {
  constructor() {
    this.validator = new Validator();
  }

  // 숫자일 때
  handleNumberInput(input, userInput, numString, idx) {
    numString += String(input);
    return { numString };
  }

  // 숫자가 아닐 때
  handleSeparatorInput(input, userInput, numString, useCustomSep, allowedSep, numSum, idx) {
    if (this.validator.checkSeparator(useCustomSep, allowedSep, input, userInput, idx)) {
      throw new Error(MESSAGES.ERROR.INPUT_BASIC_OR_CUSTOM_SEPARATOR);
    }

    if (numString[0] === '0') {
      throw new Error(MESSAGES.ERROR.INPUT_NEGATIVE_NUMBER);
    }

    numSum += Number(numString);
    numString = '';

    if (numSum === 0 && !useCustomSep) {
      throw new Error(MESSAGES.ERROR.INPUT_NEGATIVE_NUMBER);
    }

    return { numSum, numString };
  }

  // 전체 문자열 검사
  handleUserInput(useCustomSep, customSep, allowedSep, input, userInput, idx, numString, numSum) {
    if (!isNaN(input) && input.trim() !== '') {
      const numResult = this.handleNumberInput(input, userInput, numString, idx);
      numString = numResult.numString;
    } else {
      const sepResult = this.handleSeparatorInput(input, userInput, numString, useCustomSep, allowedSep, numSum, idx);
      numSum = sepResult.numSum;
      this.validator.checkValidCalculateResult(numSum);
      numString = sepResult.numString;
    }

    return { numSum, numString };
  }
}

export default Handler;
