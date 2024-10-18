import { Console } from "@woowacourse/mission-utils";
import { StrSumFunc } from "./StrSumFunc";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("문자열을 입력하세요: ");
      const result = StrSumFunc(input);
      Console.print(`결과: ${result}`);
    } catch (err) {
      Console.print(`오류: ${err.message}`);
    }
  }
}

export default App;
