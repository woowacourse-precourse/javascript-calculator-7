export default class Calculator {
  #delimiters;
  #input;
  #result;
  #numbers;

  constructor(input = '') {
    this.setInput(input);
  }
  
  /**
   * Get the result of the calculation. 
   * This method should be called after setInput and computeSum.
   * @returns {number} The result of the calculation.
   */
  getResult() {
    return this.#result;
  }

  /**
   * Set the input string to be calculated.
   * @param {string} input The input string.
   * @returns {Calculator} The Calculator instance.
   */
  setInput(input) {
    if (typeof input !== 'string') {
      throw new Error('Input should be a string');
    }

    this.#input = input;
    this.#delimiters = [',', ':'];
    this.#result = 0;
    this.#numbers = [];
    this.#validateInput();

    return this;
  }

  /**
   * Check if the input matches the required format.
   * @throws {Error} If the input is invalid.
   */
  #validateInput() {
    // TODO: Implement the input validation
  }

  /**
   * Calculate the sum of the numbers in the input string.
   * @returns {Calculator} The Calculator instance.
   */
  computeSum() {
    // TODO: Implement the sum calculation
    return this;
  }
}
