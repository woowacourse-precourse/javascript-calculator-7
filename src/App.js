import { Console } from "@woowacourse/mission-utils";
class App {

  exceptionHandler(condition, errorMessage) {
    if (condition) {
      throw new Error(errorMessage);
    }
  }

  computeSum(inputString) {
    let separator = /[,:]/;

    if (inputString.startsWith("//")) {
      inputString = inputString.replace("\\n", "\n");
      const delimiterPosition = inputString.indexOf("\n");

      this.exceptionHandler(delimiterPosition === -1, "[ERROR]");

      const customSeparator = inputString.substring(2, delimiterPosition);
      separator = new RegExp(`[${customSeparator}]`);
      inputString = inputString.substring(delimiterPosition + 1);
    }

    const numberArray = inputString.split(separator).map((value) => value.trim()).map(Number);
    this.exceptionHandler(numberArray.length === 0, "[ERROR]");
    this.exceptionHandler(numberArray.some(isNaN), "[ERROR]");
    this.exceptionHandler(numberArray.some((num) => num < 0), "[ERROR]");

    return numberArray.reduce((total, currentValue) => total + currentValue, 0);
  }

  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const inputString = await Console.readLineAsync("");

    this.exceptionHandler(inputString === "", "[ERROR]");

  }
}

export default App;
