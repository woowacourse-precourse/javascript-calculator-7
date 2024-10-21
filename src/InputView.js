import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getInput() {
    const string = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    this.inputEmptyValid(string);
    return string;
  }

  inputEmptyValid(string) {
    if (string !== "" && string.trim() === "") {
      throw new Error("[ERROR] 입력값에 공백은 입력할 수 없습니다.");
    }
  }
}

export default InputView;
