import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 덧셈할 문자열 전체를 우선 입력받기
    const printStr = await Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요.\n"
    );
    Console.print(printStr);
  }
}

export default App;
