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

      this.exceptionHandler(delimiterPosition === -1, "[ERROR] 커스텀 구분자 형식이 잘못되었습니다.");

      const customSeparator = inputString.substring(2, delimiterPosition);
      separator = new RegExp(`[${customSeparator}]`);
      inputString = inputString.substring(delimiterPosition + 1);
    }

    const numberArray = inputString.split(separator).map((value) => value.trim()).map(Number);

    this.exceptionHandler(numberArray.length === 0, "[ERROR] 구분자에 따른 숫자가 입력되지 않았습니다.");
    this.exceptionHandler(numberArray.some(isNaN), "[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
    this.exceptionHandler(numberArray.some((num) => num < 0), "[ERROR] 음수는 허용되지 않습니다.");

    return numberArray.reduce((total, currentValue) => total + currentValue, 0);
  }

  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const inputString = await Console.readLineAsync("");

    this.exceptionHandler(inputString === "", "[ERROR] 입력된 문자열이 없습니다.");

    const totalSum = this.computeSum(inputString);
    Console.print(`결과 : ${totalSum}`);
  }
}

export default App;