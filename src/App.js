import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(MESSAGES.USER_INPUT);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
