import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      Console.print(`결과 : ${input}`);
    } catch (error) {
      // reject 되는 경우
    }
  }
}

export default App;
