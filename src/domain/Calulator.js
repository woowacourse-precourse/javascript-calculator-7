import { DEFAULT_DELIMITERS } from "../constants/delimiters.js";
import calculateSum from "../utils/calculateSum.js";
import inputValidator from "../validator/inputValidator.js";
import { convertStringArrToNumberArr } from "../utils/convert.js";

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
    const resultStringArr = this.#splitByDelimiters();
    this.#vaildateStringArr(resultStringArr);
    const resultNumberArr = convertStringArrToNumberArr(resultStringArr);
    this.#vaildateNumberArr(resultNumberArr);

    return calculateSum(resultNumberArr);
  }

  #splitByDelimiters() {
    const delimiterString = this.#delimiters.join("");
    const delimiterRegex = new RegExp(`[${delimiterString}]`);
    return this.#inputString.split(delimiterRegex);
  }

  #addCustomDelimiter() {
    const customDelimiterPattern = /^\/\/(.*?)\\n/;
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
    inputValidator.number(numberArr);
    inputValidator.positiveNumber(numberArr);
  }

  #vaildateStringArr(stringArr) {
    inputValidator.numberBetweenDelimiter(stringArr);
  }
}
