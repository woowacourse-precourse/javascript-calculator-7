import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getUserInput();
      const user = this.separateUserInput(input);
      const numbers = this.parseNumbers(user);
      this.printUserOutput(numbers);
    } catch (error) {}
  }

  async getUserInput() {
    const inputWords = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return inputWords;
  }

  separateUserInput(input) {
    if (input.startsWith("//")) {
      const indexCustom = input.indexOf("\\n");
      const customDelimiter = input.substring(2, indexCustom);
      input = input.substring(indexCustom + 2);
      console.log(input);
      return input.split(customDelimiter);
    } else if (input.includes(",") || input.includes(";")) {
      return input.split(/[,;]/);
    }
    return input;
  }

  parseNumbers(input) {
    return input.map(Number);
  }

  printUserOutput(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    Console.print(`결과: ${sum}`);
  }
}

export default App;
