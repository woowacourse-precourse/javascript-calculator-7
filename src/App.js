import { Console } from "@woowacourse/mission-utils";
import { RUN_MESSAGES } from "./message.js";
import { calculateSum } from "./calculator.js";
import { extractNumbers } from "./parser.js";
import { hasNegativeNumber } from "./validation.js";
class App {
  async run() {
    const input = await Console.readLineAsync(RUN_MESSAGES.INPUT);
    const numberArray = extractNumbers(input);
    hasNegativeNumber(numberArray);
    const invalidCharacterRegexResult = calculateSum(numberArray);
    return Console.print(
      `${RUN_MESSAGES.RESULT}${invalidCharacterRegexResult}`
    );
  }
}

export default App;
