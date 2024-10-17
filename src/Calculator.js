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

  separator() {
    const numbers = this.inputValue.split(/[,;]/).map(Number);
    return numbers;
  }
}

export default Calculator;
