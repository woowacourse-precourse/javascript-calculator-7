import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      Console.print(`결과 : ${userInput}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default App;
