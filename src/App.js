import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getUserInput();
      const user = this.separateUserInput(input);
      const numbers = this.parseNumbers(user);
      this.printUserOutput(numbers);
    } catch (error) {
      Console.print("[ERROR] " + error.message);
    }
  }

  async getUserInput() {
    const inputWords = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return inputWords;
  }

  separateUserInput(input) {
    if (input === "") {
      return [0];
    }
    if (input.startsWith("//")) {
      const indexCustom = input.indexOf("\\n");
      const customDelimiter = input.substring(2, indexCustom);
      input = input.substring(indexCustom + 2);
      console.log(input);
      return input.split(customDelimiter);
    } else if (input.includes(",") || input.includes(";")) {
      return input.split(/[,;]/);
    }
    throw new Error("잘못된 입력입니다.");
  }

  parseNumbers(input) {
    const numbers = input.map(Number);
    const negativeNumbers = numbers.filter((num) => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`음수는 입력할 수 없습니다`);
    }
    if (numbers.some(isNaN)) {
      throw new Error("숫자가 아닌 값이 포함되어 있습니다.");
    }
    return numbers;
  }

  printUserOutput(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    Console.print(`${sum}`);
  }
}

export default App;
