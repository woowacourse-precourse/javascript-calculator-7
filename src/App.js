import { Console } from "@woowacourse/mission-utils";
import processInput from "./utils/processInput.js";
import { INPUT_NOTICE, OUTPUT_NOTICE } from "./data/constants.js";

class App {
  async run() {
    const UserInput = await Console.readLineAsync(
      INPUT_NOTICE
    );
    const result = processInput(UserInput);
    Console.print(`${OUTPUT_NOTICE}${result}`);
  }
}

export default App;
