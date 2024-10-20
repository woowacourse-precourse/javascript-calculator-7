import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );
      const result = input; // 계산 메서드 호출
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error}`);
    }
  }
}

export default App;
