class Calculator {
  /**
    *
    * @param {string} text
    * @param {string} customSeparator
    * @returns {number[]}
    */
  splitNumbers(text, customSeparator) {
    const regex = new RegExp(`,|:|${customSeparator}`);
    return text.split(regex).map(Number);
  }

  /**
   *
   * @param {number[]} numbers
   * @returns {number}
   */
  sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default Calculator;
