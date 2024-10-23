import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from "./Calculator.js";
import StringSpliter from "./StringSpliter.js";

class App {
  async run() {
    const userInputString = await this.getUserInput();
    const userInputNumbers = [...this.getNumbersFrom(userInputString)];
    MissionUtils.Console.print(`결과 : ${this.getResult(userInputNumbers)}`);
    return;
  }

  async getUserInput() {
    const userInputString = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (!userInputString) {
      throw new Error("[ERROR]잘못된 값을 입력하셨습니다.");
    }

    return userInputString;
  }

  getNumbersFrom(userInputString) {
    const stringSpliter = new StringSpliter(userInputString);
    stringSpliter.findCustomSeperator();
    stringSpliter.seperateNumberString();

    return stringSpliter.getNumbers();
  }

  getResult(userInputNumbers) {
    const calculator = new Calculator(userInputNumbers);

    if (!calculator.isPositive()) {
      throw new Error("[ERROR]잘못된 값을 입력하셨습니다.");
    }

    return calculator.sum();
  }
}

export default App;
