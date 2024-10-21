import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, RESULT_MESSAGE } from "./message.js";
import { extractDividerList } from "./divider.js";

class App {
  input = "";
  result = 0;
  dividerList = [",", ":"];

  async run() {
    await this.inputStart();

    const { updatedInput, updatedDividerList } = extractDividerList(this.input, this.dividerList);
    this.input = updatedInput;
    this.dividerList = updatedDividerList;

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
