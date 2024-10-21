export default class InputSeparator {
  #delimiter;

  constructor() {
    this.#delimiter = null;
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
}
