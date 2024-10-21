import { Console } from "@woowacourse/mission-utils"; // woowacourse에서 제공
import DelimiterManager from "./delimiterManager.js";
import ResultPrinter from "./resultPrinter.js";
import Calculator from "./calculator.js";

// App 클래스는 프로그램 제어를 담당
class App {
  constructor() {
    this.delimiterManager = new DelimiterManager();
    this.resultPrinter = new ResultPrinter();
    this.calculator = new Calculator();
  }

  /**
   * 사용자로부터 입력을 받고 처리
   * @returns {Promise<void>} 입력 처리 완료 후의 Promise
   */
  getInput() {
    // 사용자의 값의 입력은 Console.readLineAsync()로 제한
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
      .then((input) => {
        // 입력된 문자열을 DelimiterManager로 파싱
        const parsedInput = this.delimiterManager.parseInput(input);

        // 계산할 문자열에서 숫자들을 추출
        const numbers = this.delimiterManager.extractNumbers(
          parsedInput.calculationString
        );

        const result = this.calculator.calculate(numbers);

        this.resultPrinter.print(result);
      })
      .catch((error) => {
        // 에러 메시지를 출력하고 예외를 다시 던져 Promise가 거부
        Console.print(`[ERROR] ${error.message}`);
        throw error;
      });
  }

  // 프로그램 실행의 시작점은 App.js의 run()
  run() {
    return this.getInput();
  }
}

export default App;
