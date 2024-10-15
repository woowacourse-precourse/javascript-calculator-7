import { Console } from "@woowacourse/mission-utils";

class App {
  async generatePlusString() {
    const plusString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return plusString;
  }
  async run() {
    await this.generatePlusString();
  }
}

export default App;
