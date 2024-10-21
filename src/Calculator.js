import { ErrorMessages, EMPTY_STRING } from "./Strings.js";

class Calculator {
  static checkIsPositiveNumber(numStrArray) {
    return numStrArray.map(numStr => {
      if (numStr === EMPTY_STRING) return 0;
      const parsedNum = Number(numStr);
      if (isNaN(parsedNum) || parsedNum <= 0) throw new Error(ErrorMessages.CALCULATOR_CHECK_IS_POSITIVENUMBER);
      return parsedNum;
    });
  }

  static addNumbers(numArray) {
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

export default Calculator;