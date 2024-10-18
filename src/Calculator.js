import { Validator } from "./Validator.js";
import { CUSTOM_DELIMITER_STATEMENT } from "./constants/constants.js";

export class Calculator {
  #string;
  #customDelimiter;

  constructor(userInput) {
    this.setCustomDelimiter(userInput);
    this.validate();
  }

  setCustomDelimiter(userInput) {
    const CUSTOM_END_INDEX = userInput.indexOf(CUSTOM_DELIMITER_STATEMENT.END);

    if (Calculator.isSetCustomDelimiter(userInput, CUSTOM_END_INDEX)) {
      this.#customDelimiter = userInput.slice(
        CUSTOM_DELIMITER_STATEMENT.START.length,
        CUSTOM_END_INDEX
      );
      this.#string = userInput.slice(
        CUSTOM_END_INDEX + CUSTOM_DELIMITER_STATEMENT.END.length
      );
    }

    if (!Calculator.isSetCustomDelimiter(userInput, CUSTOM_END_INDEX)) {
      this.#customDelimiter = undefined;
      this.#string = userInput;
    }
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

  validate() {
    if (this.#customDelimiter !== undefined) {
      Validator.customDelimiterLength(this.#customDelimiter);
      Validator.isCustomDelimiterString(this.#customDelimiter);
      Validator.duplicatedSet(this.#string);
    }

    Validator.containUndelimitedChars(this.#string, this.#customDelimiter);
  }

  extract() {
    const EXTRACTED_ARR = this.#string.split(/[^\d]+/).map(Number);

    return EXTRACTED_ARR;
  }

  add() {
    const EXTRACTED_ARR = this.extract();
    const SUM = EXTRACTED_ARR.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
      0
    );

    return SUM;
  }
}
