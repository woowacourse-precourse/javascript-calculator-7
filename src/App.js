import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "./constants/gameMessages.js";

class App {
  async run() {
    const userInput = await Console.readLineAsync(GAME_MESSAGES.START);
    Console.print(GAME_MESSAGES.END + result);
  }
}

export default App;
