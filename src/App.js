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

  getInput() {
    // 사용자의 값의 입력은 Console.readLineAsync()로 제한함
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
      .then((input) => {
        try {
          // 입력된 문자열을 DelimiterManager로 파싱
          const parsedInput = this.delimiterManager.parseInput(input);

          // 계산할 문자열에서 숫자들을 추출
          const numbers = this.delimiterManager.extractNumbers(
            parsedInput.calculationString
          );

          const result = this.calculator.calculate(numbers);

          this.resultPrinter.print(result);
        } catch (error) {
          // 에러 발생 시 추가 처리 없이 종료
        }
      })
      .catch((error) => {
        // Promise에서 발생한 에러 처리
        // 에러 메시지를 출력하고 프로그램 종료
        Console.print(`[ERROR] ${error.message}`);
      });
  }

  // 프로그램 실행의 시작점은 App.js의 run()
  run() {
    this.getInput();
  }
}

export default App;
