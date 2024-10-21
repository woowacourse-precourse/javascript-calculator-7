import { calculateResult } from "./calculateResult.js";
import { parseInput } from "./parseInput.js";
import { validateNumbers } from "./validateNumbers.js";
import { readUserInput } from "./readUserInput.js";
import { printResult } from "./printResult.js";
import { Console } from "@woowacourse/mission-utils";

export class App {
  async run() {
    try {
      const input = await readUserInput();
      const parsedNumbers = parseInput(input);
      validateNumbers(parsedNumbers);
      const result = calculateResult(parsedNumbers);
      printResult(result);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
