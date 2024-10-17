class Calculator {
  /**
    *
    * @param {string} text
    * @returns {number[]}
    */
  splitNumbers(text) {
    const regex = /,|:/;
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
