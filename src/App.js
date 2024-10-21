import { Console } from "@woowacourse/mission-utils";
import { checkInputFormat } from "./utils/formatUtils";
import { calculate } from "./utils/calculationUtils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    if (checkInputFormat(input)) {
      const result = calculate(input);
      Console.print(`결과 : ${result}`);
    }
  }
}

export default App;
