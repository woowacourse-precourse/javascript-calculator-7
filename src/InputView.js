import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getInput() {
    const string = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return string;
  }
}

export default InputView;
