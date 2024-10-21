import { Console } from "@woowacourse/mission-utils";
import preprocess from "./functions/preprocess.js";

class App {
  async run() {
    // 입력
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요.\n"
    );

    // 출력값
    let output;
    output = preprocess(input);

    // 출력
    Console.print(`결과 : ${output}`);
  }
}

export default App;
