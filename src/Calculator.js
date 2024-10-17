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
    const numbers = this.inputValue.split(/[,:]/).map(Number);
    return numbers;
  }
}

export default Calculator;
