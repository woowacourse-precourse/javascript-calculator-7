import { Validator } from "./Validator.js";
import { CUSTOM_DELIMITER_STATEMENT } from "./constants/constants.js";
import { Calculator } from "./Calculator.js";

export class Operand {
  #string;
  #customDelimiter;

  constructor(userInput) {
    this.#setCustomDelimiter(userInput);
    this.#validate();
  }

  #setCustomDelimiter(userInput) {
    const customEndIndex = userInput.indexOf(CUSTOM_DELIMITER_STATEMENT.END);

    if (Operand.isSetCustomDelimiter(userInput, customEndIndex)) {
      this.#customDelimiter = this.extractCustomDelimiter(
        userInput,
        customEndIndex
      );
      this.#string = this.extractString(customEndIndex, userInput);

      return;
    }

    this.#customDelimiter = undefined;
    this.#string = userInput;
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
    const customStart = userInput.startsWith(CUSTOM_DELIMITER_STATEMENT.START);
    const containsCustomEnd = customEndIndex !== -1;

    if (!customStart) return false;
    if (!containsCustomEnd) return false;

    return true;
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
    const extractedArr = Calculator.extractNumber(this.#string);

    return Calculator.add(extractedArr);
  }
}
