import { ErrorMessages, EMPTY_STRING, ZERO } from "./Constant.js";

class Calculator {
  static checkIsPositiveNumber(numStrArray) {
    return numStrArray.map(numStr => {
      if (numStr === EMPTY_STRING) return ZERO;
      const parsedNum = Number(numStr);
      if (isNaN(parsedNum) || parsedNum <= ZERO) throw new Error(ErrorMessages.CALCULATOR_CHECK_IS_POSITIVENUMBER);
      return parsedNum;
    });
  }

  static addNumbers(numArray) {
    return numArray.reduce((sum, num) => sum + num, ZERO);
  }
}

export default Calculator;