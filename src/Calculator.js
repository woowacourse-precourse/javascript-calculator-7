class Calculator {
  constructor() {
    this.delimiter = new Set([',', ':']);
  }

  calculate(input) {
    if (input === '') {
      return 0;
    }
    this.isValidateInput(input);
    return input;
  }

  //문자열 유효성 검사
  isValidateInput(text) {
    const pattern = `^[${[...this.delimiter].join('')}\\d]+$`; //구분자와 숫자로만 이루어진 문자열인지
    const regex = new RegExp(pattern);
    if (!regex.test(text)) {
      throw new Error('구분자와 양수가 아닌 다른 문자가 존재합니다');
    }
  }
}

export default Calculator;
