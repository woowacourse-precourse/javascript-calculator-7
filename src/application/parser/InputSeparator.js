import { DELEMITER_DEFINITION } from "../../constant/DELIMITER.js";

export default class InputSeparator {
  #customDelimiter;
  #numberString;

  constructor() {
    this.#customDelimiter = null;
    this.#numberString = null;
  }

  hasCustomDelimiter(rawInput) {
    if (rawInput.length >= DELEMITER_DEFINITION.LEN 
      && rawInput.startsWith(DELEMITER_DEFINITION.START) 
      &&  rawInput.indexOf(DELEMITER_DEFINITION.END) === DELEMITER_DEFINITION.END_INDEX) {
      return true;
    }
    return false;
  }

  getCustomDelimiter(rawInput) {
    if (this.hasCustomDelimiter(rawInput)) {
      this.#customDelimiter = rawInput[DELEMITER_DEFINITION.DELIMITER_INDEX];
    }
    return this.#customDelimiter;
  }

  getNumberString(rawInput) {
    if (this.hasCustomDelimiter(rawInput)) {
      this.#numberString = rawInput.slice(DELEMITER_DEFINITION.LEN);
    } else {
      this.#numberString = rawInput;
    }
    return this.#numberString;
  }
}
