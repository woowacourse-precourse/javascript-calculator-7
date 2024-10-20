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
      throw new Error('[ERROR]: Input should be a string');
    }

    this.#input = input;
    this.#delimiters = [',', ':'];
    this.#result = 0;
    this.#numbers = [];
    this.#validateInput();

    return this;
  }

  /**
   * Extract the custom delimiter from the input string.
   * @returns {void} Nothing.
   */
  #extractDelimiter() {
    // Extract custom delimiter from the input
    const CUSTOM_DELIMITER_REGEX = /^\/\/(.)?\\n/;
    const CUSTOM_DELIMITER = this.#input.match(CUSTOM_DELIMITER_REGEX)?.[1];

    // Add custom delimiter to the list of delimiters
    if (CUSTOM_DELIMITER && !this.#delimiters.includes(CUSTOM_DELIMITER)) {
      this.#delimiters.push(CUSTOM_DELIMITER);
    }
  }

  /**
   * Check if the input string has a custom delimiter.
   * @returns {boolean} Whether the input string has a custom delimiter.
   */
  #hasCustomDelimiter() {
    const CUSTOM_DELIMITER_REGEX = /^\/\/(.)?\\n/;
    return CUSTOM_DELIMITER_REGEX.test(this.#input);
  }

  /**
   * Extract the numbers from the input string.
   * @returns {void} Nothing.
   */
  #extractNumbers() {
    const HAS_CUSTOM_DELIMITER = this.#hasCustomDelimiter();
    const START_IDX = HAS_CUSTOM_DELIMITER ? this.#input.indexOf('\\n') + 2 : 0;

    const DELIMITER_SEPARATE_REGEX = new RegExp(`[${this.#delimiters.join('')}]`)

    // Extract numbers from the input
    this.#numbers = this.#input.substring(START_IDX)
      .split(DELIMITER_SEPARATE_REGEX)
      .filter((num) => num !== '')
      .map((num) => Number(num));
  }

  /**
   * Check if the input matches the required format.
   * @throws {Error} If the input is invalid.
   */
  #validateInput() {
    this.#extractDelimiter();

    const INPUT_FORMAT_REGEX = new RegExp(`^(//(.)?\\\\n)?(\\d+([${this.#delimiters.join('')}]\\d+)*)?$`)

    if (!INPUT_FORMAT_REGEX.test(this.#input)) {
      throw new Error('[ERROR]: Invalid input')
    }

    this.#extractNumbers();

    this.#numbers.forEach((num) => {
      if (num <= 0) {
        throw new Error('[ERROR]: Only positive number is allowed');
      }
    })
  }

  /**
   * Calculate the sum of the numbers in the input string.
   * @returns {Calculator} The Calculator instance.
   */
  computeSum() {
    this.#result = this.#numbers.reduce((acc, num) => acc + Number(num), 0);
    return this;
  }
}
