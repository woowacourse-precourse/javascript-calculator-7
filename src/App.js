import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (input === "") {
      throw new Error("[ERROR] 문자열을 입력해주세요");
    }
  }
}

export default App;
