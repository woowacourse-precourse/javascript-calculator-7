import { Validator } from "./Validator.js";
import { CUSTOM_DELIMITER_STATEMENT } from "./constants/constants.js";

export class Calculator {
  #string;
  #customDelimiter;

  constructor(userInput) {
    this.#setCustomDelimiter(userInput);
    this.#validate();
  }

  #setCustomDelimiter(userInput) {
    const CUSTOM_END_INDEX = userInput.indexOf(CUSTOM_DELIMITER_STATEMENT.END);

    if (Calculator.isSetCustomDelimiter(userInput, CUSTOM_END_INDEX)) {
      this.#customDelimiter = this.extractCustomDelimiter(
        userInput,
        CUSTOM_END_INDEX
      );
      this.#string = this.extractString(CUSTOM_END_INDEX, userInput);
    }

    if (!Calculator.isSetCustomDelimiter(userInput, CUSTOM_END_INDEX)) {
      this.#customDelimiter = undefined;
      this.#string = userInput;
    }
  }

  extractCustomDelimiter(userInput, customEndIndex) {
    return userInput.slice(
      CUSTOM_DELIMITER_STATEMENT.START.length,
      customEndIndex
    );
  }

  extractString(customEndIndex, userInput) {
    return userInput.slice(
      customEndIndex + CUSTOM_DELIMITER_STATEMENT.END.length
    );
  }

  static isSetCustomDelimiter(userInput, customEndIndex) {
    if (
      userInput.startsWith(CUSTOM_DELIMITER_STATEMENT.START) &&
      customEndIndex !== -1
    ) {
      return true;
    }

    if (
      !userInput.startsWith(CUSTOM_DELIMITER_STATEMENT.START) ||
      customEndIndex === -1
    ) {
      return false;
    }
  }

  #validate() {
    if (this.#customDelimiter !== undefined) {
      Validator.customDelimiterLength(this.#customDelimiter);
      Validator.isCustomDelimiterString(this.#customDelimiter);
      Validator.duplicatedSet(this.#string);
    }

    Validator.containUndelimitedChars(this.#string, this.#customDelimiter);
  }

  calculate() {
    const EXTRACTED_ARR = this.extractNumber(this.#string);

    return this.add(EXTRACTED_ARR);
  }

  extractNumber(string) {
    const EXTRACTED_ARR = string.split(/[^\d]+/).map(Number);

    return EXTRACTED_ARR;
  }

  add(arr) {
    return arr.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
      0
    );
  }
}
