import { ERROR_MESSAGE } from "./message.js";

class Validator {
  constructor(userInput) {
    this.userInput = userInput;
    this.defaultDelimiter = /[,:]/;
  }

  validateNumbers(numbers) {
    const HAS_INVALID_NUMBER = numbers.some(
      (number) => Number.isNaN(number) || number < 0
    );

    if (HAS_INVALID_NUMBER) {
      throw new Error(ERROR_MESSAGE.invalid_number);
    }
  }

  extractCustomDelimiter() {
    const CUSTOM_DELIMITER_REGEXP = /\/\/(.*?)\n/;
    const CUSTOM_DELIMITER = this.userInput.match(CUSTOM_DELIMITER_REGEXP);

    if (!CUSTOM_DELIMITER) {
      throw new Error(ERROR_MESSAGE.invalid_delimiter);
    }

    const NEW_DELIMITER = CUSTOM_DELIMITER[1];
    this.defaultDelimiter = new RegExp(`[${NEW_DELIMITER}]`);
    this.userInput = this.userInput.split("\n")[1];
  }

  parseInput() {
    if (this.userInput.startsWith("//")) {
      this.extractCustomDelimiter();
    }

    const EXTRACTED_NUMBERS = this.userInput
      .split(this.defaultDelimiter)
      .map(Number);
    this.validateNumbers(EXTRACTED_NUMBERS);
    return EXTRACTED_NUMBERS;
  }
}

export default Validator;
