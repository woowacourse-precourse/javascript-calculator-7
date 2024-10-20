import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from './Calculator.js';
import Splitter from "./Splitter.js";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const [delimiterSection, numberSection] = Splitter.splitInput(input);
    Splitter.addDelimiter(delimiterSection);
    const numStrArray = Splitter.splitNumberSection(numberSection);

    const numArray = Calculator.checkIsPositiveNumber(numStrArray);
    const answer = Calculator.addNumbers(numArray);
    MissionUtils.Console.print("결과 : " + answer);
  }
}

export default App;
