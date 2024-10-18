class Calculator {
  /**
   *
   * @param {string} value
   * @returns {number}
   */
  calculate(value) {
    return value.reduce((sum, current) => sum + Number(current), 0);
  }
}

export default Calculator;
