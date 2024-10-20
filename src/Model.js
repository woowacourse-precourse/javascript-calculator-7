const DELIMITER_REGEX = {
  CUSTOM: /^\/\/(.+)\\n/, // 커스텀 구분자 정규표현식
  DEFAULT: /[,|:]/, // 기본 구분자 정규표현식 (쉼표와 콜론)
};

class Model {
  constructor(input) {
    this.numbers = []; // 상태로 숫자 목록을 저장
    this.delimiter = DELIMITER_REGEX.DEFAULT;
    this.input = input;
  }

  extractNumber() {
    // 커스텀 구분자 찾는 정규표현식
    const customDelimiterMatch = this.input.match(DELIMITER_REGEX.CUSTOM);

    let stringNumbers;

    if (customDelimiterMatch) {
      this.delimiter = customDelimiterMatch[1];
      this.input = this.input.replace(DELIMITER_REGEX.CUSTOM, ''); // 커스텀 구분자를 정의한 부분 제거
    }

    stringNumbers = this.input.split(this.delimiter);
    this.numbers = stringNumbers.map((string) => this.converToNumber(string));
  }

  converToNumber(string) {
    const number = Number(string);
    if (isNaN(number)) {
      throw new Error('[ERROR] 유효하지 않은 숫자가 포함되어 있습니다');
    }
    if (number < 0) {
      throw new Error('[ERROR] 음수는 입력할 수 없습니다');
    }
    return number;
  }

  sum() {
    return this.numbers.reduce((acc, number) => acc + number, 0);
  }

  calculate() {
    this.extractNumber();
    return this.sum();
  }
}

export default Model;
