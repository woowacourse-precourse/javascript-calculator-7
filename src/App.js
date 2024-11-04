import { calculator } from "./calculator/calculator.js";
import { getInput } from "./utils/input.js";
import { getOutput } from "./utils/output.js";

class App {
  async run() {
    const input = await getInput();
    const result = calculator(input);
    getOutput(result);
  }
}

export default App;
