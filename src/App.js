import { formatInput } from "./model/formatter.js";
import { getInput } from "./view/Input.js";
import { printOutput } from "./view/Output.js";
import { checkInputValidation } from "./validation/validation.js";
import { plusCalculator } from "./utils/plus.calculator.js";

class App {
  async run() {
    let input = await getInput();
    input = formatInput(input);
    checkInputValidation(input);
    const additionResult = plusCalculator(input);
    printOutput(additionResult);
  }
}

export default App;
