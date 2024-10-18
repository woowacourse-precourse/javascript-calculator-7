import { Console } from "@woowacourse/mission-utils";
import add from "./calculator/add.js";
import consoleUtils from "./calculator/consoleUtils.js";

class App {
  async run() {
    const inputString = await consoleUtils();
    const result = add(inputString);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
