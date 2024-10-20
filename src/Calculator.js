import Validator from "./Validator";
import Utils from "./Utils";

const REGEX_CUSTOM_DELIMITER = /\/\/(.*)\\n/;

class Calculator {
  constructor() {
    this.Validator = new Validator();
    this.Utils = new Utils();
    this.delimiters = [",", ":"];
  }

  calculate(input) {
    // 커스텀 구분자가 있다면
    if (input.match(REGEX_CUSTOM_DELIMITER)) {
      // 커스텀 구분자 검증
      this.Validator.customDelimiterVaildation(input);

      // 커스텀 구분자 처리 (커스텀 구분자 구하고, 커스텀 구분자 설정 부분 자르기)
      const [processedInput, customDelimiter] = this.Utils.processCustomDelimiter(input);
      input = processedInput;
      this.delimiters.push(customDelimiter); // 기존 구분자 배열에 추가
    }

    // 입력값 구분자로 분할
    const numArr = this.Utils.parseInput(input, this.delimiters);

    // 분할된 입력값 검증
    this.Validator.numberArrValidation(numArr);

    // 입력값 더하기
    const sum = this.Utils.sumNumbers(numArr);

    return sum;
  }
}

export default Calculator;
