class Delimiter {
  constructor() {
    this.defaultDelimiters = new Set([',', ':']);
    this.customDelimiters = new Set();
  }

  getDelimiters() {
    return [...this.defaultDelimiters, ...this.customDelimiters];
  }

  setCustomDelimiter(delimiters) {
    delimiters
      .split('')
      .forEach(delimiter => this.customDelimiters.add(delimiter));
  }
}

export default Delimiter;
