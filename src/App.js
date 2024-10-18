import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.userInput = "";
    this.separator = null;
  }

  async getUserInput() {
    this.userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  // 구분자 찾기 기능
  async getSeparator() {
    if (this.userInput.startsWith("//")) {
      // 구분자 획득
      this.separator = this.userInput[2];

      // 입력값에서 커스텀 구분자 관련 문자 제거
      const indexOfn = this.userInput.indexOf("n");
      this.userInput = this.userInput.slice(indexOfn + 1);
    }
  }

  async run() {
    await this.getUserInput();
    await this.getSeparator();
  }
}

export default App;
