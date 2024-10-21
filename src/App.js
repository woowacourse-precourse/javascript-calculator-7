import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("입력하세요.\n");

    const replacedString = input.replaceAll(":", ",");
    let resultString = replacedString;
  }
}

export default App;
