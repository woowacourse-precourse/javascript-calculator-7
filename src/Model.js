const DELIMITER_REGEX = {
  CUSTOM: /^\/\/(.+)\\n/, // 커스텀 구분자 정규표현식
  DEFAULT: /[,|:]/, // 기본 구분자 정규표현식 (쉼표와 콜론)
};

class Model {
  #numberList = [];
  #delimiter = DELIMITER_REGEX.DEFAULT; // 기본 구분자를 초기값으로 설정
  string;

  constructor(input) {
    this.string = input; // 입력값 저장
    this.checkCustomDelimiter();
  }

  checkCustomDelimiter() {
    const customDelimiterMatchResult = this.findCustomDelimiter();
    if (customDelimiterMatchResult) {
      this.#delimiter = customDelimiterMatchResult[1]; // 커스텀 구분자 설정
      this.string = this.string.replace(DELIMITER_REGEX.CUSTOM, ''); // 커스텀 구분자 제거
    }
  }

  findCustomDelimiter() {
    return this.string.match(DELIMITER_REGEX.CUSTOM);
  }

  extractNumber() {
    const splitedString = this.string.split(this.#delimiter);
    this.#numberList = splitedString.map((string) => this.convertToNumber(string));
  }

  convertToNumber(string) {
    const number = Number(string);
    if (Number.isSafeInteger(number)) {
      throw new Error('[ERROR] 유효하지 않은 정수가 포함되어 있습니다');
    }
    if (number < 0) {
      throw new Error('[ERROR] 음수는 입력할 수 없습니다');
    }
    return number;
  }

  sum() {
    return this.#numberList.reduce((acc, number) => acc + number, 0); // 숫자의 합을 반환
  }

  calculate() {
    if (this.string === '') {
      throw new Error('[ERROR] 한 자리 이상의 문자열을 입력해주세요');
    }
    this.extractNumber(); // 숫자 추출
    return this.sum(); // 합산 결과 반환
  }
}

export default Model;
