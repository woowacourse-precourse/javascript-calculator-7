import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {
    // 문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    let words;

    // 문자열 구분
    if (input.startsWith("//") && input.substring(3, 5) === "\\n") {
      words = input.substring(5).split(input[2])
    } else {
      words = input.split(/[,|:]/);
    }
    Console.print(words);
  }
}

export default App;
