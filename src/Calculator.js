class Calculator {
  constructor() {
    this.delimiter = new Set([',', ':']);
    this.startIndex = 0;
    this.result = 0;
  }

  calculate(input) {
    const useCustomDelimiter = this.hasCustomDelimiter(input); //커스텀 구분자 사용 여부 담기
    useCustomDelimiter && this.addCustomDelimiter(input);
    const calculateText = input.slice(this.startIndex); //구분자를 기준으로 계산할 문자열

    if (calculateText.trim() === '') {
      return this.result;
    }

    this.isValidateInput(calculateText);
    const numbers = this.parseNumber(calculateText); //추출한 숫자 담기
    const addResult = this.addNums(numbers); //덧셈 결과 담기
    this.result = addResult;
    return this.result;
  }

  //커스텀 구분자 사용 여부 판단
  hasCustomDelimiter(text) {
    const regex = /\/\/.*\\n/g;
    return regex.test(text);
  }

  //커스텀 구분자 구하기
  addCustomDelimiter(text) {
    const regex = /\/\/(.*?)\\n/g;
    let findCustom;

    while ((findCustom = regex.exec(text)) !== null) {
      if (findCustom.index !== this.startIndex) {
        //커스텀 구분자 조건 1 : 문자열 앞에서 연속적으로 주어질 때
        throw new Error('[ERROR] 커스텀 구분자의 위치가 올바르지 않습니다.');
      }
      if (findCustom[1].length !== 1) {
        //커스텀 구분자 조건 2 : 문자 1개
        throw new Error('[ERROR] 커스텀 구분자의 문자가 1개가 아닙니다.');
      }
      if (/\d/.test(findCustom[1])) {
        //커스텀 구분자 조건 3 : 숫자가 아닌 문자
        throw new Error('[ERROR] 커스텀 구분자는 숫자가 불가합니다.');
      }
      this.startIndex += findCustom[0].length;
      this.delimiter.add(findCustom[1]);
    }
  }

  //문자열 유효성 검사
  isValidateInput(text) {
    const pattern = `^[${[...this.delimiter].join('')}\\d]+$`; //구분자와 숫자로만 이루어진 문자열인지
    const regex = new RegExp(pattern);
    if (!regex.test(text)) {
      throw new Error('[ERROR] 구분자와 양수가 아닌 다른 문자가 존재합니다');
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
