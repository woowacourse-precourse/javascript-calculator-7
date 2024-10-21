import { Console } from "@woowacourse/mission-utils";
import InputView from "./View/InputView.js";
import OutPutView from "./View/OutputView.js";
import Validation from "./Validation.js";

class Calculate {
  async startCalculate() {
    const splitedNums = await this.getUserInput();
    try {
      this.validateUserInput(splitedNums);
      const result = this.calculateTotal(splitedNums);
      await OutPutView.printResult(result);
    } catch (e) {
      Console.print(e);
      throw e;
    }
  }

  validateUserInput(splitedNums) {
    Validation.checkPositiveNum(splitedNums);
    Validation.checkZeroNum(splitedNums);

    return splitedNums;
  }

  async getUserInput() {
    const userInput = await InputView.getUserInput();
    return this.splitByDelimiters(userInput);
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
    Validation.checkInvalidDelimiter(userInput);

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

  calculateTotal(splitedNums) {
    return splitedNums.reduce((acc, cur) => (acc += cur));
  }
}

export default Calculate;
