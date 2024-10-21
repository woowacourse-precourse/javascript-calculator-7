export default class InputSeparator {
  #customDelimiter;
  #numberString;

  constructor() {
    this.#customDelimiter = null;
    this.#numberString = null;
  }

  hasCustomDelimiter(rawInput) {
    if (rawInput.length >= 5 && rawInput.startsWith('//') &&  rawInput.indexOf('\\n') === 3) {
      return true;
    }
    return false;
  }

  getCustomDelimiter(rawInput) {
    if (this.hasCustomDelimiter(rawInput)) {
      this.#customDelimiter = rawInput[2];
    }
    return this.#customDelimiter;
  }

  getNumberString(rawInput) {
    if (this.hasCustomDelimiter(rawInput)) {
      this.#numberString = rawInput.slice(5);
    } else {
      this.#numberString = rawInput;
    }
    return this.#numberString;
  }
}
