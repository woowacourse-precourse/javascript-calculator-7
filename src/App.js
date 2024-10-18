import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.userInput = "";
  }

  async getUserInput() {
    this.userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  async run() {
    await this.getUserInput();
  }
}

export default App;
