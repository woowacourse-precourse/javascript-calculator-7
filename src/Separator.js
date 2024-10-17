class Separator {
  #separators;

  constructor() {
    this.#separators = new Set([",", ":"]);
  }

  addCustomSeparator(inputStr) {
    const customSeparatorPattern = /^\/\/(.)\\n/;
    const customSeparatorMatch = inputStr.match(customSeparatorPattern);

    if (!customSeparatorMatch) {
      return inputStr;
    }

    const customSeparator = customSeparatorMatch[1];
    this.#separators.add(customSeparator);

    return inputStr.slice(customSeparatorMatch[0].length);
  }

  getSeparatorPattern() {
    return [...this.#separators].join("|");
  }
}

export default Separator;
