import { DEFAULT_DELIMITER, ERROR_MESSAGE } from "./constants.js";

/**
 * 계산 처리 기능
 */

const CalculatorGenerator = {
  async getResult(inputString) {
    if (this.checkCustomDelimiter(inputString)) {
      return this.calculateCustomDelimiter(inputString);
    } else {
      return this.calculatDelimiter(inputString);
    }
  },

  checkCustomDelimiter(inputString) {
    return inputString.startsWith("//");
  },

  calculatDelimiter(inputString) {
    if (inputString === "") {
      return 0;
    }
    let numbers = [];
    numbers = inputString.split(DEFAULT_DELIMITER);
    return this.calculateNumber(numbers);
  },

  calculateCustomDelimiter(inputString) {
    let intStr = inputString;
    let customDelimeterEndIndex = intStr.indexOf("\\n");
    let customDelimeter = intStr.substring(2, customDelimeterEndIndex);
    let numbers = [];
    intStr = intStr.substring(customDelimeterEndIndex + 2);
    numbers = intStr.split(customDelimeter);
    return this.calculateNumber(numbers);
  },

  calculateNumber(numberArr) {
    let sum = numberArr.reduce((acc, cur) => {
      let parsedNumber = cur === "" ? 0 : parseFloat(cur, 10);
      return acc + parsedNumber;
    }, 0);
    return sum;
  },
};

export default CalculatorGenerator;
