import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const INPUT = await this.userInput();
      const USER = this.userSeparator(INPUT);
      const NUMBERS = this.parseNumbers(USER);
      this.userOutput(NUMBERS);
    } catch (error) {}
  }

  async userInput() {
    const inputWords = Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return inputWords;
  }
}

export default App;
