class Calculator {
  constructor(customSeparator, numbers) {
    this.customSeparator = customSeparator;
    this.numbers = this.splitNumbers(numbers);
  }

  /**
    *
    * @param {string} text - 구분자와 숫자로 이루어진 문자열
    * @returns {number[]}
    */
  splitNumbers(text) {
    const regex = new RegExp(`,|:|${this.customSeparator}`);
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
