class Calculator {
  /**
   *
   * @param {Array<string>} values
   * @returns {number}
   */
  calculate(values) {
    return values.reduce((sum, current) => sum + Number(current), 0);
  }
}

export default Calculator;
