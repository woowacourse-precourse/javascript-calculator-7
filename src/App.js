import { Console } from "@woowacourse/mission-utils";
import process from "./functions/process.js";

class App {
  async run() {
    // 입력
    const INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요.\n"
    );

    // 출력값
    const OUTPUT = process(INPUT);

    // 출력
    Console.print(`결과 : ${OUTPUT}`);
  }
}

export default App;
