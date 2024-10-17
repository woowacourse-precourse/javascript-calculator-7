import { Console } from "@woowacourse/mission-utils";
import { stringSumCalculator } from "./functions";

class App {
  async run() {
    //input
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    //output
    Console.print("결과 : " + stringSumCalculator(input));
  }
}

export default App;
