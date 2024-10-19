import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    let result = 0;

    if (input.length === 0) {
      Console.print(`결과 : ${result}`);
      return;
    }

    Console.print(`입력 문자열 확인: ${input}`);
  }
}

export default App;
