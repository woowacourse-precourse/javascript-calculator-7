import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, DEFAULT_SEPARATORS } from "./constants/index.js";
import { parseUserInput, getCustomSeparator, isAllPositive } from "./utils/index.js";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(MESSAGES.USER_INPUT);
      const userInputString = userInput.replaceAll("\\n", "\n");

      const { customString, numberString } = parseUserInput(userInputString);
      const customSeparators = getCustomSeparator(customString);

      // 커스텀 문자열이 있는데 형식에 맞지 않다면 예외 처리
      if (customString !== "" && customSeparators.length === 0) {
        throw new Error(MESSAGES.INVALID_CUSTOM_SEPARATOR);
      }

      const separators = [...customSeparators, ...DEFAULT_SEPARATORS];
      const regExpSeparator = new RegExp(separators.join("|"), "g");
      const numbers = numberString.split(regExpSeparator).map(Number);

      if (!isAllPositive(numbers)) {
        throw new Error(MESSAGES.INVALID_ALL_POSITIVE);
      }
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
