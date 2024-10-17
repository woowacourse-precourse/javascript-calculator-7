import { Validator } from "./Validator.js";

export class Calculator {
  #string;
  #customDelimiter;

  constructor(userInput) {
    this.setCustomDelimiter(userInput);
    this.validate();
  }

  setCustomDelimiter(userInput) {
    const CUSTOM_START = "//";
    const CUSTOM_END = "\n";
    const CUSTOM_END_INDEX = userInput.indexOf(CUSTOM_END);

    if (userInput.startsWith(CUSTOM_START) && CUSTOM_END_INDEX !== -1) {
      this.#customDelimiter = userInput.slice(
        CUSTOM_START.length,
        CUSTOM_END_INDEX
      );
      this.#string = userInput.slice(CUSTOM_END_INDEX + CUSTOM_END.length);
    }

    if (!userInput.startsWith(CUSTOM_START) || CUSTOM_END_INDEX === -1) {
      this.#customDelimiter = undefined;
      this.#string = userInput;
    }
  }

  validate() {
    if (this.#customDelimiter !== undefined) {
      Validator.customDelimiterLength(this.#customDelimiter);
      Validator.isCustomDelimiterString(this.#customDelimiter);
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
