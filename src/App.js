import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (inputString.startsWith("//")) {
      if (inputString.search(/\n/)) {
        console.log("커스텀 구분자가 있다");
      } else {
        console.log("커스텀 구분자가 없다");
      }
    } else {
      console.log("커스텀 구분자가 없다");
    }
  }
}

export default App;
