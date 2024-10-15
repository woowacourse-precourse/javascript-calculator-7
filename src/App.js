import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";
import { parseUserInput, getCustomSeparator } from "./utils/index.js";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(MESSAGES.USER_INPUT);
      const { customString, numberString } = parseUserInput(userInput);
      const customSeparators = getCustomSeparator(customString);

      // 커스텀 문자열이 있는데 형식에 맞지 않다면 예외 처리
      if (customString !== "" && customSeparators.length === 0) {
        throw new Error(MESSAGES.INVALID_CUSTOM_SEPARATOR);
      }
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
