import StringValidator from "./StringValidator.js";
import DelimiterParser from "./DelimiterParser.js";
import StringCalculator from "./StringCalculator.js";

class StringAdditionModel {
  constructor(
    validator = new StringValidator(),
    delimiterParser = new DelimiterParser(),
    calculator = new StringCalculator()
  ) {
    this.validator = validator;
    this.parser = delimiterParser;
    this.calculator = calculator;
  }

  // 입력값을 받아 최종 결과를 반환하는 메서드
  calculate(input) {
    // 커스텀 구분자 위치 유효성 검사
    this.validator.validateCustomDelimiterPosition(input);
    const preProcessInput = this.preProcessInput(input);

    // 빈 문자열인 경우 0을 반환
    if (this.isEmpty(preProcessInput)) {
      return 0;
    }

    // 기본 구분자와 커스텀 구분자를 파싱함.
    const { numberStrings, customDelimiter } = this.parseInput(preProcessInput);

    // 입력값에 대한 유효성 검사
    this.validateInput(preProcessInput, numberStrings, customDelimiter);

    // 문자열을 숫자로 변환
    const numbers = this.parseNumbers(numberStrings);

    return this.calculator.calculate(numbers);
  }

  // \n을 개행문자로 변환하는 메서드
  preProcessInput(input) {
    return input.replace(/\\n/g, "\n");
  }

  // 문자열이 비어있는지 확인하는 메서드
  isEmpty(input) {
    return input.trim() === "";
  }

  // 입력값을 파싱하는 메서드
  parseInput(input) {
    return this.parser.parse(input);
  }

  // 입력값 유효성 검사하는 메서드
  validateInput(input, numberStrings, customDelimiter) {
    this.validator.validateMultipleDelimiterInput(input, customDelimiter); // 숫자들 사이에 구분자가 여러 개 포함된 경우 유효성 검사
    this.validator.validateNumberStrings(numberStrings); // 숫자가 아닌 값이 포함되어 있는 경우 유효성 검사
    this.validator.validateNegativeNumbers(numberStrings); // 음수가 포함되어 있는 경우 유효성 검사
  }

  // 문자열을 숫자로 변환하는 메서드
  parseNumbers(numberStrings) {
    return numberStrings.map((number) => parseInt(number, 10));
  }
}

export default StringAdditionModel;
