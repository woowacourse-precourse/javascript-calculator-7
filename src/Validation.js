import { ERROR_MESSAGE } from "./constants/Message.js";

export default class Validation {
  static checkPositiveNum(splitedNums) {
    let isExistNegative = splitedNums.map((num) => (num < 0 ? true : false));

    if (isExistNegative.toString().includes("true")) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  }

  static checkZeroNum(splitedNums) {
    let isZeroNum = splitedNums.some((num) => (num === 0 ? true : false));

    if (isZeroNum) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  }

  static checkInvalidDelimiter(userInput) {
    const invalidDelimiter = userInput
      .split(/[,:]/)
      .some((num) => /[^0-9\s,:\n]/.test(num));

    if (invalidDelimiter) {
      throw new Error(ERROR_MESSAGE.INVALID_DELIMITER);
    }
  }
}
