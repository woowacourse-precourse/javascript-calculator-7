class DelimiterExtractor {
  #defaultDelimiters;
  #customDelimiter;

  constructor() {
    this.#defaultDelimiters = [",", ":"];
    this.#customDelimiter = null;
  }

  extractCustomDelimiter(inputValue) {
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
