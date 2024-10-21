import { Console } from "@woowacourse/mission-utils";

class ConsoleView {
  async readInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
  }

  displayResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default ConsoleView;
