import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const DEFAULT_SEPARATORS = [",", ":"];
    const regex = new RegExp(DEFAULT_SEPARATORS.join("|")); // 정규 표현식: /,|:/
    let result;

    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (input === "") {
      result = 0;
    } else {
      const numbers = input.split(regex);
      // numbers 배열을 사용하여 추가 작업 수행
    }

    Console.print(result);
  }
}

export default App;
