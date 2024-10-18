import InputView from "./View/InputView.js";
import OutPutView from "./View/OutputView.js";

class Calculate {
  async startCalculate() {
    const result = await this.getUserInput();
    await OutPutView.printResult(result);
  }

  async getUserInput() {
    const userInput = await InputView.getUserInput();
    console.log(this.splitByDelimiters(userInput));
  }

  splitByDelimiters(userInput) {
    if (userInput.startsWith("//") || userInput.startsWith("\\n")) {
      return this.splitByCustom(userInput);
    } else {
      return this.splitByCommaColon(userInput);
    }
  }

  // 콤마, 콜론 기준으로 Input을 분리
  splitByCommaColon(userInput) {
    return userInput.split(/[,:]/).map(Number);
  }

  splitByCustom(userInput) {
    // //로 시작하는 커스텀 구분자의 경우
    if (userInput.startsWith("//")) {
      const splitedInput = userInput.split("\\n");
      const customSplited = splitedInput[0].substring(2);

      userInput = splitedInput[1];
      return userInput.split(customSplited).map(Number);
    }

    // \n로 시작하는 커스텀 구분자의 경우
    if (userInput.startsWith("\\n")) {
      const splitedInput = userInput.split("//");
      const customSplited = splitedInput[0].substring(2);

      userInput = splitedInput[1];
      return userInput.split(customSplited).map(Number);
    }
  }

  validateUserInput(userInput) {}
}

export default Calculate;
