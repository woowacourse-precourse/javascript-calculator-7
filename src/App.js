import { Console } from "@woowacourse/mission-utils"; // woowacourse에서 제공
import DelimiterManager from "./DelimiterManager.js";
import ResultPrinter from "./ResultPrinter.js";

// App 클래스는 프로그램 제어를 담당함
class App {
  constructor() {
    this.delimiterManager = new DelimiterManager();
    this.resultPrinter = new ResultPrinter();
  }

  getInput() {
    // 사용자의 값의 입력은 Console.readLineAsync()로 제한함
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then((input) => {
      this.resultPrinter.print(input);
    });
  }

  // 프로그램 실행의 시작점은 App.js의 run()
  run() {
    this.getInput();
  }
}

export default App;
