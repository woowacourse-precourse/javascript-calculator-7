import Calculator from "./calculator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.calculator = new Calculator();
  }

  async run() {
    let sum; // 계산 결과를 저장할 변수
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      sum = this.calculator.calculate(input);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}

export default App;
