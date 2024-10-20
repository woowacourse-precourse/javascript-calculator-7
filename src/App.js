import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    input = this.validateInitialInput(input);
  }

  validateInitialInput(input) {
    if (/\s/.test(input)) {
      throw new Error("[ERROR] 공백이 포함될 수 없습니다.");
    }
    return input.length === 0 ? 0 : input;
  }

  getCustomSeparator(input) {
    const suffixCustomSeparatorIndex = input.indexOf(
      this.suffixCustomSeparator
    );
    if (suffixCustomSeparatorIndex === -1) {
      throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다.");
    }
    const costomSeparator = input.slice(2, suffixCustomSeparatorIndex);
    if (costomSeparator === "") {
      throw new Error("[ERROR] 빈 구분자는 허용되지 않습니다.");
    }
    return costomSeparator;
  }
}

export default App;
