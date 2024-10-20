import { Console } from "@woowacourse/mission-utils";
import Input from "./InputClass.js";
import { allValidationAndCalc, getInput } from "./inputFunctions.js";

class App {
  async run() {
    const INPUT_STRING = await getInput();
    const inputData = new Input(INPUT_STRING);

    if (inputData.isEmpty()) {
      Console.print("결과 : " + inputData.result);
    } else if (!inputData.isEmpty() && allValidationAndCalc(inputData) !== 0) {
      Console.print("결과 : " + inputData.result);
    } else {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
