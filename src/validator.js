import { Error_Message } from "./message.js";

class Validator {
  constructor(userInput) {
    this.userInput = userInput;
    this.defaultDelimiter = /[,:]/;
  }

  validateEmptyInput() {
    if (this.userInput.trim() === "") {
      throw new Error(Error_Message.empty_input);
    }
  }

  validateNumbers(numbers) {
    const HAS_INVALID_Number = numbers.some(
      (number) => isNaN(number) || number < 0
    );

    if (HAS_INVALID_Number) {
      throw new Error(Error_Message.invalid_negative_number);
    }
  }

  extractCustomDelimiter() {
    const CUSTOM_DELIMITER_REGEXP = /\/\/(.*?)\n/;
    const CUSTOM_DELIMITER = this.userInput.match(CUSTOM_DELIMITER_REGEXP);

    if (!CUSTOM_DELIMITER) {
      throw new Error(Error_Message.invalid_delimiter);
    }

    const NEW_DELIMITER = CUSTOM_DELIMITER[1];
    this.defaultDelimiter = new RegExp(`[${NEW_DELIMITER}]`);
    this.userInput = this.userInput.split("\n")[1];
  }

  parseInput() {
    this.validateEmptyInput();

    if (this.userInput.startsWith("//")) {
      this.extractCustomDelimiter();
    }

    const NUMBERS = this.userInput.split(this.defaultDelimiter).map(Number);
    this.validateNumbers(NUMBERS);
    return NUMBERS;
  }
}

export default Validator;
