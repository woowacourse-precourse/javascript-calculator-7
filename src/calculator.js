import empty_checker from './empty_checker.js';
import get_Delimiter from './get_delimiter.js';
import validator from './validator.js';
import separator from './separator.js';
import summator from './summator.js';

class Calculator {
  constructor(input) {
    this.input = input;
  }

  calculate() {
    if (empty_checker(this.input)) {
      return 0;
    }
    // 기본 구분자 정의 및 커스텀 구분자 추출
    const delimiter = get_Delimiter(this.input);

    // 입력값 형식 검사
    const validated_input = validator(this.input);

    const separated_arr = separator(validated_input, delimiter);

    return summator(separated_arr);
  }
}

export default Calculator;
