import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";
import { parseUserInput, getCustomSeparator } from "./utils/index.js";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(MESSAGES.USER_INPUT);
      const { customString, numberString } = parseUserInput(userInput);
      const customSeparators = getCustomSeparator(customString);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
