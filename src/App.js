import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {
    // 문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const result = await Console.readLineAsync("");

    // 문자열 구분
    let words = result.split(/[,|:]/); // 콤마 또는 콜론
    Console.print(words);
  }
}

export default App;
