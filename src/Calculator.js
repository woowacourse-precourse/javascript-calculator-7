class Calculator {
  constructor() {
    this.delimiter = new Set([',', ':']);
  }

  calculate(input) {
    if (input === '') {
      return 0;
    }
    this.isValidateInput(input);
    const numbers = this.parseNumber(input); //추출한 숫자 담기
    const result = this.addNums(numbers); //덧셈 결과 담기
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

  //숫자 추출하기
  parseNumber(text) {
    const pattern = `[${[...this.delimiter].join('')}]`;
    const splitTexts = text.split(new RegExp(pattern));
    const extractedNums = splitTexts
      .filter((v) => v !== '')
      .map((v) => Number(v));
    return extractedNums;
  }

  //숫자 더하기
  addNums(arr) {
    return arr.length === 0 ? 0 : arr.reduce((n, v) => n + v, 0);
  }
}

export default Calculator;
