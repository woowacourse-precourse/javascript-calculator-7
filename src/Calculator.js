class Calculator {
  constructor(inputValue) {
    this.inputValue = inputValue;
    this.delimiters = [",", ":"];
    this.customDelimiter = null;
  }

  hasCustomDelimiter() {
    const delimiterPattern = /\/\/(.*?)\\n/;

    const customDelimiter = this.inputValue.match(delimiterPattern);

    if (customDelimiter) {
      this.customDelimiter = customDelimiter[1];
      this.inputValue = this.inputValue.slice(customDelimiter[0].length);
      return true;
    } else {
      return false;
    }
  }

  addCustomDelimiter() {
    if (this.hasCustomDelimiter()) {
      this.delimiters.push(this.customDelimiter);
    }
  }

  separator() {
    this.addCustomDelimiter();
    const delimitersRegex = new RegExp(`[${this.delimiters.join("")}]`);
    const numbers = this.inputValue.split(delimitersRegex).map(Number);
    return numbers;
  }
}

export default Calculator;
