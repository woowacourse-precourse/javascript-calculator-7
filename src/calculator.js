import checkEmpty from './empty_checker';

class Calculator {
  constructor(input) {
    this.input = input;
  }

  calculate() {
    if (checkEmpty(this.input)) {
      return 0;
    }

    return null;
  }
}

export default Calculator;
