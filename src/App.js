import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, RESULT_MESSAGE } from "./message.js";
import { extractDividerProcess } from "./divider.js";

class App {
  input = "";
  result = 0;
  divider = [",", ":"];

  async run() {
    await this.inputStart();

    const { updatedInput, updatedDivider } = extractDividerProcess(this.input, this.divider);
    this.input = updatedInput;
    this.divider = updatedDivider;

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
