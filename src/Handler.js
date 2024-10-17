import { MESSAGES } from './constants.js';

class Handler {
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
    } else {
      numSum += Number(numString);
      numString = '';
    }
    return { numSum, numString, hasDecimalPoint };
  }
}

export default Handler;
