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
  }
}

export default App;
