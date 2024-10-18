import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = [];

    try {
      let string = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      separator = string.match(/\/\/(.*?)\\n(.*)/);

      // "//", "\n"이 있다면 커스텀 구분자 지정
      if (separator) {
        const customSeperator = separator[1];
        string = separator[2];
      }
    } catch (error) {}
  }
}

export default App;
