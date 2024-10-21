import { DEFAULT_DELIMITERS } from "../constants/delimiters.js";
import calculateSum from "../utils/calculateSum.js";
import inputValidator from "../validator/inputValidator.js";

export default class Calculator {
  #inputString;
  #delimiters;

  constructor(inputString) {
    this.#inputString = inputString;
    this.#delimiters = DEFAULT_DELIMITERS;
    this.#validateInputString(this.#inputString);
  }

  calculate() {
    this.#addCustomDelimiter();
    const numberArr = this.#splitByDelimiters();
    this.#vaildateNumberArr(numberArr);
    return calculateSum(numberArr);
  }

  #splitByDelimiters() {
    const delimiterString = this.#delimiters.join("");
    const delimiterRegex = new RegExp(`[${delimiterString}]`);
    return this.#inputString.split(delimiterRegex).map(Number);
  }

  #addCustomDelimiter() {
    const customDelimiterPattern = /^\/\/(.+)\\n/;
    const customDelimiterMatch = this.#inputString.match(customDelimiterPattern);

    if (customDelimiterMatch) {
      const customDelimiter = customDelimiterMatch[1];
      this.#delimiters.push(customDelimiter);
      this.#inputString = this.#inputString.replace(customDelimiterPattern, "");
    }
  }

  #validateInputString(inputString) {
    inputValidator.emptyInput(inputString);
    inputValidator.customDelimiter(inputString);
  }

  #vaildateNumberArr(numberArr) {
    inputValidator.invalidIsNumber(numberArr);
    inputValidator.invalidPositiveNumber(numberArr);
  }
}