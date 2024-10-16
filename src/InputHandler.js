import { Console } from "@woowacourse/mission-utils";

class InputHandler {
  async getInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }

  printError(error) {
    Console.print(`[ERROR] ${error.message}`);
  }
}

export default InputHandler;
