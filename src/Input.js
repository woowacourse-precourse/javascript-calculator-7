import { Console } from "@woowacourse/mission-utils";

class Input {
  async getInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }
}

export default Input;
