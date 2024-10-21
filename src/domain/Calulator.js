import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_DELIMITERS } from "../constants/delimiters.js";
import calculateSum from "../utils/calculateSum.js";

export default class Calculator {
  #inputString;
  #delimiters;

  constructor(inputString) {
    this.#inputString = inputString;
    this.#delimiters = DEFAULT_DELIMITERS;
  }

  calculate() {
    this.#addCustomDelimiter();
  }


  #addCustomDelimiter() {
    const customDelimiterPattern = /^\/\/(.+)\\n/;
    const customDelimiterMatch = this.#inputString.match(customDelimiterPattern);

    if (customDelimiterMatch) {
      Console.print(customDelimiterMatch[1]);
      const costomDelimiter = customDelimiterMatch[1];
      this.#delimiters.push(costomDelimiter);
    }
  }
}
