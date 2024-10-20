import { DEFAULT_SEPARATOR, REGEXP } from "./constants/index.js";

class Calculator {
  constructor() {
    this.customSeparator = [];
    this.numbers = "";
  }

  init(customSeparator, numbers) {
    this.customSeparator = customSeparator;
    this.numbers = this.splitNumbers(numbers);
  }

  /**
    *
    * @param {string} text - 구분자와 숫자로 이루어진 문자열
    * @returns {number[]}
    */
  splitNumbers(text) {
    if (REGEXP.IS_ALL_NUMBER.test(text)) {
      return [Number(text)];
    }

    const separators = [...DEFAULT_SEPARATOR, ...this.customSeparator].map((sep) => sep.replace(REGEXP.ESCAPE, "\\$&"));
    const regex = new RegExp(separators.join("|"));
    return text.split(regex).map(Number);
  }

  /**
   *
   * @returns {number}
   */
  sum() {
    return this.numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default Calculator;
