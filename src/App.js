import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자를 입력해 주세요.");
    const STRING_INPUT = await Console.readLineAsync("");
    const CLEANED_INPUT = STRING_INPUT.replace(/"/g, "").trim();
    Console.print(CLEANED_INPUT);
  }
}

export default App;
