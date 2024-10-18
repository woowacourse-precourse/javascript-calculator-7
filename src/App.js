import CalculatorService from './CalculatorService.js';
import { inputText, printSumResult } from './util.js';

class App {
  async run() {
    const userInput = await inputText();
    // 사용자 입력값 검증하기
    CalculatorService.validateUserInput(userInput);

    // 검증된 사용자 입력값 커스텀 구분자 추출하기
    const { customSeparator, processedUserInput } =
      CalculatorService.parseUserInput(userInput);

    // 합 구하기
    const sumResult = CalculatorService.sumUserInput(
      processedUserInput,
      customSeparator,
    );
    printSumResult(sumResult);
  }
}

export default App;
