import { convertNumberList } from "./features/convertNumberList.js";
import { extractNumbersAsString } from "./features/extractNumbersAsString.js";
import { sumNumberList } from "./features/sumNumberList.js";
import { inputHandler } from "./handlers/inputHandler.js";
import { outputHandler } from "./handlers/outputHandler.js";

class App {
  async run() {
    const INPUT = await inputHandler();
    const STRING_NUM_LIST = extractNumbersAsString(INPUT);
    let output = "";

    try {
      const NUM_LIST = convertNumberList(STRING_NUM_LIST);
      const SUM = sumNumberList(NUM_LIST);
      output = `결과: ${SUM}`;
    } catch (error) {
      output = `[ERROR]: ${error.message}`;
    } finally {
      outputHandler(output);
    }
  }
}

export default App;
