import InputView from "./View/InputView.js";
import OutPutView from "./View/OutputView.js";

class Calculate {
  async startCalculate() {
    const result = await this.getUserInput();
    await OutPutView.printResult(result);
  }

  async getUserInput() {
    const userInput = await InputView.getUserInput();
    return this.splitByCommaColon(userInput);
  }

  // 콤마, 콜론 기준으로 Input을 분리
  splitByCommaColon(userInput) {
    return userInput.split(/[,:]/).map(Number);
  }

  validateUserInput(userInput) {}
}

export default Calculate;
