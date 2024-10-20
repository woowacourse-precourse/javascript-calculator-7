import { Console } from "@woowacourse/mission-utils";
import add from "./calculator/add.js";
import consoleUtils from "./calculator/consoleUtils.js";
import customSeparator from "./calculator/customSeparator.js";

class App {
  async run() {
    try {
      const inputString = await consoleUtils();
      const custom = customSeparator(inputString);
      const result = add(inputString, custom);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
