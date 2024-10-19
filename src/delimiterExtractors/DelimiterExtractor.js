import IDelimiterExtractor from "../interfaces/IDelimiterExtractor.js";

class DelimiterExtractor extends IDelimiterExtractor {
  #defaultDelimiters;
  #customDelimiter;

  constructor() {
    super();
    this.#defaultDelimiters = [",", ":"];
    this.#customDelimiter = null;
  }

  extractDelimiter(inputValue) {
    const delimiterPattern = /\/\/(.*?)\\n/;
    const customDelimiterMatch = inputValue.match(delimiterPattern);

    if (customDelimiterMatch) {
      this.#customDelimiter = customDelimiterMatch[1];
      return inputValue.slice(customDelimiterMatch[0].length);
    } else {
      return inputValue;
    }
  }

  getDelimiters() {
    if (this.#customDelimiter) {
      return [...this.#defaultDelimiters, this.#customDelimiter];
    }
    return this.#defaultDelimiters;
  }
}

export default DelimiterExtractor;
