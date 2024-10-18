export default class Calculator {
  /**
   * @param {number} value
   * @returns {boolean}
   */
  validator(value) {
    return Number.isSafeInteger(value) && value > 0;
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add(a, b) {
    return a + b;
  }
}