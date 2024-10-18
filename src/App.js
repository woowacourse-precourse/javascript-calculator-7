import { Console } from "@woowacourse/mission-utils";
import processInput from "./utils/processInput.js";

class App {
  async run() {
    const UserInput = await Console.readLineAsync();
    const result = processInput(UserInput);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
