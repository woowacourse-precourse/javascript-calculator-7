class Calculator {
  constructor(inputValue) {
    this.inputValue = inputValue;
  }

  hasCustomDelimiter() {
    const delimiterPattern = /\/\/(.*?)\\n/;

    const customDelimiter = this.inputValue.match(delimiterPattern);

    if (!customDelimiter) {
      return false;
    } else {
      return true;
    }
  }
}

export default Calculator;
