import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, RESULT_MESSAGE } from "./message.js";
import { extractCustomDvider } from "./divider.js";

class App {
  input = "";
  result = 0;
  divider = [",", ":"];

  async run() {
    await this.inputStart();

    const {extractedString, newInput} = extractCustomDvider(this.input);

    if (extractedString !== "") {
      this.divider.push(extractedString);
    }
    this.input = newInput;

    await this.resultPrint();
  }
  
  async inputStart() {
    const input = await Console.readLineAsync(INPUT_MESSAGE);
    this.input = input.replace("\\n","\n")
  }

  async resultPrint() {
    Console.print(`${RESULT_MESSAGE}${this.result}`);
  }
}

export default App;
