import { Console } from "@woowacourse/mission-utils";
class App {

  exceptionHandler(condition, errorMessage) {
    if (condition) {
      throw new Error(errorMessage);
    }
  }

  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const inputString = await Console.readLineAsync("");

    this.exceptionHandler(inputString === "", "[ERROR]");

  }
}

export default App;
