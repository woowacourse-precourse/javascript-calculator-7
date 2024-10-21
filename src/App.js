import { convertNumberList } from "./features/convertNumberList.js";
import { extractNumbersAsString } from "./features/extractNumbersAsString.js";
import { sumNumberList } from "./features/sumNumberList.js";
import { inputHandler } from "./handlers/inputHandler.js";
import { outputHandler } from "./handlers/outputHandler.js";

class App {
  async run() {
    const INPUT = await inputHandler();
    const STRING_NUM_LIST = extractNumbersAsString(INPUT);

    try {
      const NUM_LIST = convertNumberList(STRING_NUM_LIST);
      const SUM = sumNumberList(NUM_LIST);
      outputHandler(`결과 : ${SUM}`);
    } catch (error) {
      throw new Error(`[ERROR]: ${error.message}`);
    }
  }
}

export default App;
