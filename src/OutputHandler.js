import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
  printStartMessage() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
  }

  printErrorMessage(message) {
    Console.print(`[Error] ${message}`);
  }
}

export default OutputHandler;