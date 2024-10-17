import InputView from "./View/InputView.js";
import OutPutView from "./View/OutputView.js";

class Calculate {
  async startCalculate() {
    const result = await this.getUserInput();
    await OutPutView.printResult(result);
  }

  async getUserInput() {
    const userInput = await InputView.getUserInput();
    return userInput;
  }
}

export default Calculate;
