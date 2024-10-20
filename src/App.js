import { Console } from "@woowacourse/mission-utils"; // woowacourse에서 제공
import DelimiterManager from "./delimiterManager.js";
import ResultPrinter from "./resultPrinter.js";

// App 클래스는 프로그램 제어를 담당함
class App {
  constructor() {
    this.delimiterManager = new DelimiterManager();
    this.resultPrinter = new ResultPrinter();
  }

  getInput() {
    // 사용자의 값의 입력은 Console.readLineAsync()로 제한함
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then((input) => {
      // 입력된 문자열을 DelimiterManager로 파싱
      const parsedInput = this.delimiterManager.parseInput(input);

      // 파싱된 결과를 ResultPrinter로 출력
      this.resultPrinter.print(parsedInput);
    });
  }

  // 프로그램 실행의 시작점은 App.js의 run()
  run() {
    this.getInput();
  }
}

export default App;
