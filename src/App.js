import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, RESULT_MESSAGE } from "./message.js";

class App {
  input = "";
  result = 0;

  async run() {
    await this.inputStart();
    await this.resultPrint();
  }
  
  async inputStart() {
    this.input = await Console.readLineAsync(INPUT_MESSAGE);
  }

  async resultPrint() {
    Console.print(`${RESULT_MESSAGE}${this.result}`);
  }
}

export default App;
