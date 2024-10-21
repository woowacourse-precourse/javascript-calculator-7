import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // [feat] 1. 사용자 입력
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    } catch (error) {
      Console.print(error.message);
    }
  }


}

export default App;
