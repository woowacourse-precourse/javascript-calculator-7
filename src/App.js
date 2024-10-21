import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.userInput();

    } catch (error) {
      throw error;
    }
  }

  userInput() {
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }
}

export default App;
