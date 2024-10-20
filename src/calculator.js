import empty_checker from './empty_checker.js';
import get_Delimiter from './get_delimiter.js';
import validator from './validator.js';

class Calculator {
  constructor(input) {
    this.input = input;
  }

  calculate() {
    if (empty_checker(this.input)) {
      return 0;
    }
    // 입력값 형식 검사
    validator(this.input);
    // 기본 구분자 정의 및 커스텀 구분자 추출
    const delimiter = get_Delimiter(this.input);

    return null;
  }
}

export default Calculator;
