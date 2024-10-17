import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력 받기
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }
}

export default App;
