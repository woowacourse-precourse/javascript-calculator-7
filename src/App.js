import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from './Calculator.js';
import Splitter from "./Splitter.js";
import { RESULT_PREFIX, INPUT_MESSAGE } from "./Strings.js";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE
    );
    const [delimiterSection, numberSection] = Splitter.splitInput(input);
    Splitter.addDelimiter(delimiterSection);
    const numStrArray = Splitter.splitNumberSection(numberSection);

    const numArray = Calculator.checkIsPositiveNumber(numStrArray);
    const answer = Calculator.addNumbers(numArray);
    MissionUtils.Console.print(RESULT_PREFIX + answer);
  }
}

export default App;
