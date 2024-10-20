import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "./constants/gameMessages.js";
import splitNumber from "./utils/splitNumber.js";
import validateNumber from "./utils/validateNumber.js";
import getUserInput from "./utils/inputHandler.js";
import printMessage from "./utils/outputHandler.js";

class App {
  async run() {
    const userInput = await getUserInput(GAME_MESSAGES.START);

    const numbers = splitNumber(userInput).map(validateNumber);
    const result = numbers.reduce((acc, cur) => acc + cur, 0);

    printMessage(GAME_MESSAGES.END + result);
  }
}

export default App;
