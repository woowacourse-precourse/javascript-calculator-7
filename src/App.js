import { Console } from "@woowacourse/mission-utils";
class App {

  exceptionHandler(condition, errorMessage) {
    if (condition) {
      throw new Error(errorMessage);
    }
  }

  computeSum(inputString) {
    let separator = /[,:]/;

    const numberArray = inputString.split(separator).map((value) => value.trim()).map(Number);
    this.exceptionHandler(numberArray.length === 0, "[ERROR]");

    return numberArray.reduce((total, currentValue) => total + currentValue, 0);
  }

  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const inputString = await Console.readLineAsync("");

    this.exceptionHandler(inputString === "", "[ERROR]");

  }
}

export default App;
