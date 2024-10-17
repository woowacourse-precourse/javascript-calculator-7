import StringValidator from "./StringValidator.js";

class StringCalculator {
  constructor() {
    this.stringValidator = new StringValidator();
  }

  // 입력값을 받아 최종 결과를 반환하는 메서드
  calculate(input) {
    this.stringValidator.validateCustomDelimiterPosition(input); // 커스텀 구분자 위치 유효성 검사
    const preProcessInput = this.preProcessInput(input);

    if (this.isEmpty(preProcessInput)) {
      return 0;
    }

    const { numberStrings, customDelimiter } =
      this.parseBasicAndCustomDelimiter(preProcessInput); // 기본 구분자와 커스텀 구분자를 파싱함.

    this.stringValidator.validateMultipleDelimiterInput(
      preProcessInput,
      customDelimiter
    ); // 숫자들 사이에 구분자가 여러 개 포함된 경우 유효성 검사
    this.stringValidator.validateNumberStrings(numberStrings); // 숫자가 아닌 값이 포함되어 있는 경우 유효성 검사
    this.stringValidator.validateNegativeNumbers(numberStrings); // 음수가 포함되어 있는 경우 유효성 검사

    const numbers = this.parseNumbers(numberStrings);

    return this.calculateSum(numbers);
  }

  // \n을 개행문자로 변환하는 메서드
  preProcessInput(input) {
    return input.replace(/\\n/g, "\n");
  }

  // 문자열이 비어있는지 확인하는 메서드
  isEmpty(input) {
    return input.trim() === "";
  }

  // 문자열을 숫자로 변환하는 메서드
  parseNumbers(numberStrings) {
    return numberStrings.map((number) => parseInt(number, 10));
  }

  // 커스텀 구분자를 포함한 모든 구분자 파싱 메서드
  parseBasicAndCustomDelimiter(input) {
    const customDelimiter = /^\/\/(.)\n(.*)/; // (.)은 커스텀 구분자 사이에 있는 하나의 문자를 의미하며 (.*)은 커스텀 구분자 이후의 문자열을 의미한다.
    const match = input.match(customDelimiter);

    // 커스텀 구분자가 있는 경우
    if (match) {
      const [, delimiter, numbers] = match;
      return {
        numberStrings: numbers.split(new RegExp(`[${delimiter},:]`)),
        customDelimiter: delimiter,
      };
    }

    return {
      numberStrings: input.split(/[,:]/),
      customDelimiter: null,
    };
  }

  // 숫자 배열을 받아 합을 구하는 메서드
  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default StringCalculator;
