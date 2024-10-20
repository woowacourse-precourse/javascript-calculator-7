import InputHandler from "./InputHandler.js";
import DelimiterExtractor from "./DelimiterCheck.js";
import NumberSplitter from "./NumberSplit.js";
import InputValidator from "./ExceptionCheck.js";
import NumberCalculator from "./NumberCalculator.js";

// 입력값 파싱 및 처리 로직

class InputCheck {
  async calculate() {
    const inputHandler = new InputHandler();
    const input = await inputHandler.getInput(); // 사용자 입력 받기
    try {
      InputValidator.validate(input); // 입력값 검증

      const { delimiters, trimmedInput } = DelimiterExtractor.extract(input); // 구분자 추출

      const numbers = NumberSplitter.split(trimmedInput, delimiters); // 숫자 분리

      InputValidator.validateNumbers(numbers); // 숫자 유효성 검사
      const result = NumberCalculator.sum(numbers); // 숫자 계산
      inputHandler.printResult(result); // 결과 출력
    } catch (error) {
      throw error;
    }
  }
}

export default InputCheck;
