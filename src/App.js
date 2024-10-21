import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력하여 주세요."
    );
  }
}

export default App;
