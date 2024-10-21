import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력하여 주세요.\n"
    );

    if (userInput.startsWith("//") && userInput.indexOf("\\n") !== -1) {
      const NUMBERS = userInput.substr(5).split(userInput[2]);
    } else {
      const NUMBERS = userInput.split(/,|:/);
    }
  }
}

export default App;
