import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputValue = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const numbersArray = this.makeNumbersArray(inputValue);

    this.validateNumbersArray(numbersArray);

    const sum = this.calculateSum(numbersArray);

    Console.print(`결과 : ${sum}`);
  }

  makeNumbersArray(inputValue) {
    const customSeparator = inputValue.startsWith("//") ? inputValue[2] : null;
    const numbers = customSeparator ? inputValue.split("\\n")[1] : inputValue;

    return numbers
      .split(",")
      .flatMap((value) => (value.includes(":") ? value.split(":") : value))
      .flatMap((value) =>
        customSeparator && value.includes(customSeparator)
          ? value.split(customSeparator)
          : value
      );
  }

  validateNumbersArray(numbersArray) {
    if (numbersArray.some((value) => Number(value) <= 0)) {
      throw new Error("[ERROR] 양수의 올바른 숫자를 입력해 주세요.");
    }
  }

  calculateSum(numbersArray) {
    const sum = numbersArray.reduce((acc, curr) => acc + Number(curr), 0);

    if (Number.isNaN(sum)) {
      throw new Error("[ERROR] 형식에 맞게 문자열을 입력해 주세요.");
    }
    return sum;
  }
}

export default App;
