class Calculator {
  constructor() {
    this.delimiter = new Set([',', ':']);
    this.startIndex = 0;
    this.result = 0;
  }

  calculate(input) {
    const useCustomDelimiter = this.hasCustomDelimiter(input);
    useCustomDelimiter && this.addCustomDelimiter(input);
    const calculateText = input.slice(this.startIndex);

    if (calculateText.trim() === '') {
      return this.result;
    }

    this.isValidateInput(calculateText);
    const numbers = this.parseNumber(calculateText);
    this.result = this.addNums(numbers);
    return this.result;
  }

  hasCustomDelimiter(text) {
    const regex = /\/\/.*\\n/g;
    return regex.test(text);
  }

  addCustomDelimiter(text) {
    const regex = /\/\/(.*?)\\n/g;
    let findCustom;

    while ((findCustom = regex.exec(text)) !== null) {
      if (findCustom.index !== this.startIndex) {
        throw new Error('[ERROR] 커스텀 구분자의 위치가 올바르지 않습니다.');
      }
      if (findCustom[1].length !== 1) {
        throw new Error('[ERROR] 커스텀 구분자의 문자가 1개가 아닙니다.');
      }
      if (/\d/.test(findCustom[1])) {
        throw new Error('[ERROR] 커스텀 구분자는 숫자가 불가합니다.');
      }
      this.startIndex += findCustom[0].length;
      this.delimiter.add(findCustom[1]);
    }
  }

  isValidateInput(text) {
    const pattern = `^[${[...this.delimiter].join('')}\\d]+$`; //
    const regex = new RegExp(pattern);
    if (!regex.test(text)) {
      throw new Error('[ERROR] 구분자와 양수가 아닌 다른 문자가 존재합니다');
    }
  }

  parseNumber(text) {
    const pattern = `[${[...this.delimiter].join('')}]`;
    const splitTexts = text.split(new RegExp(pattern));
    const extractedNums = splitTexts
      .filter((v) => v !== '')
      .map((v) => Number(v));
    return extractedNums;
  }

  addNums(arr) {
    return arr.length === 0 ? 0 : arr.reduce((n, v) => n + v, 0);
  }
}

export default Calculator;
