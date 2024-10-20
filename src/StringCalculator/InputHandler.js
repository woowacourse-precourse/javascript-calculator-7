import { Console } from "@woowacourse/mission-utils";

//입출력 처리 로직
class InputHandler {
  async getInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }

  printError(message) {
    Console.print(message);
  }
}

export default InputHandler;
