import { GAME_MESSAGES } from "./constants/gameMessages.js";
import splitNumber from "./utils/splitNumber.js";
import validateNumber from "./utils/validateNumber.js";
import getUserInput from "./utils/inputHandler.js";
import printMessage from "./utils/outputHandler.js";
import sumNumber from "./utils/sumNumber.js";

class App {
  async run() {
    const userInput = await getUserInput(GAME_MESSAGES.START);

    const numbers = splitNumber(userInput).map(validateNumber);
    const result = sumNumber(numbers);

    printMessage(GAME_MESSAGES.END + result);
  }
}

export default App;
