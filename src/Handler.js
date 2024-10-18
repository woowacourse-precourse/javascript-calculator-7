import { MESSAGES, SEPARATOR } from './constants.js';
import Validator from './Validator.js';

class Handler {
  constructor() {
    this.validator = new Validator();
  }

  // 숫자일 때
  handleNumberInput(input, userInput, numString, idx) {
    if (input === '0' && numString === '' && userInput[idx + 1] !== '.') {
      throw new Error(MESSAGES.ERROR.INPUT_NEGATIVE_NUMBER);
    }
    numString += String(input);
    return { numString };
  }

  // 숫자가 아닐 때
  handleSeparatorInput(input, hasDecimalPoint, numString, separator, assignCustomSep, numSum) {
    if (input === '.' && !hasDecimalPoint) {
      hasDecimalPoint = true;
      numString += '.';
    } else if (!separator.includes(input) && !assignCustomSep.includes(input)) {
      throw new Error(MESSAGES.ERROR.INPUT_BASIC_OR_CUSTOM_SEPARATOR);
    } else if (input === '.' && hasDecimalPoint) {
      throw new Error(MESSAGES.ERROR.INPUT_CONTINUOUS_DOTS);
    } else {
      numSum += Number(numString);
      numString = '';
      hasDecimalPoint = false;
    }
    return { numSum, numString, hasDecimalPoint };
  }

  // 전체 문자열 검사
  handleUserInput(input, userInput, numString, idx, hasDecimalPoint, separator, allowedSeps, numSum) {
    if (!isNaN(input) && input.trim() !== '') {
      const numResult = this.handleNumberInput(input, userInput, numString, idx);
      numString = numResult.numString;
    } else {
      const sepResult = this.handleSeparatorInput(input, hasDecimalPoint, numString, separator, allowedSeps, numSum);
      numSum = sepResult.numSum;
      this.validator.checkValidCalculateResult(numSum);
      numString = sepResult.numString;
      hasDecimalPoint = sepResult.hasDecimalPoint;
    }

    return { numSum, numString, hasDecimalPoint };
  }
}

export default Handler;
