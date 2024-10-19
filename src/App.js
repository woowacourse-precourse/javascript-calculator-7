import { Console } from "@woowacourse/mission-utils";
import { StringStorage } from "./StringStorage/StringStorage.js";
import { separateString } from "./util/separateString.js";
import { UserInput } from "./UserInput/UserInput.js";
import { input } from "./util/input.js";
import { Pattern } from "./Pattern/Pattern.js";
import { Calculator } from "./Calculator/Calculator.js";
import { RESULT, START } from "./constant/index.js";

class App {
  async run() {
    const userInput = new UserInput(await input(START));
    const storage = new StringStorage(...userInput.splitInput());
    const pattern = new Pattern(storage.getSeparatorArray());
    const calculator = new Calculator(
      separateString(new RegExp(pattern.makeOrPattern()), storage.string).map(
        Number
      )
    );
    Console.print(`${RESULT}${calculator.add()}`);
  }
}

export default App;
