import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자를 입력해 주세요.");
    const STRING_INPUT = await Console.readLineAsync("");
    const CLEANED_INPUT = STRING_INPUT.replace(/"/g, "").trim();
    const WORDS = CLEANED_INPUT.split(/[,|:]/);
    const STRING_TO_NUM = WORDS.map(Number);
    Console.print(STRING_TO_NUM);
  }
}

export default App;
