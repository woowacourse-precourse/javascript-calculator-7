import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = [];

    try {
      let string = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      separator = string.match(/\/\/(.*?)\\n(.*)/);
    } catch (error) {}

    // Console.print(separator);
  }
}

export default App;
