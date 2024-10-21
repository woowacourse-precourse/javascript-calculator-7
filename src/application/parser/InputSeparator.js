export default class InputSeparator {
  #delimiter;
  #numberString;

  constructor() {
    this.#delimiter = null;
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
      this.#delimiter = rawInput[2];
    }
    return this.#delimiter;
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
