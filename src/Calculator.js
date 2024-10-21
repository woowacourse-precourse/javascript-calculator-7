import { ErrorMessages, EMPTY_STRING } from "./Strings.js";

class Calculator {
  static checkIsPositiveNumber(numStrArray) {
    const result = [];
    numStrArray.forEach((numStr) => {
      if (numStr === EMPTY_STRING) {
        result.push(0);
        return;
      }
      const parsedNum = Number(numStr);
      if (isNaN(parsedNum) || parsedNum <= 0) throw new Error(ErrorMessages.CALCULATOR_CHECK_IS_POSITIVENUMBER);
      result.push(parsedNum);
    });

    return result;
  }

  static addNumbers(numArray) {
    let sum = 0;
    numArray.forEach(num => {
      sum += Number(num);
    });
    return sum;
  }
}

export default Calculator;