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
      throw new Error("[ERROR]");
    }
  }

  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  separateUserInput(input) {
    if (input === "") {
      return [0];
    }
    const result = input.startsWith("//")
      ? this.extractDelimiter(input)[1].split(this.extractDelimiter(input)[0])
      : input.split(/[,;]/);
    if (result.some((value) => value === "")) {
      throw new Error("구분자가 잘못 사용되었습니다.");
    }
    return result;
  }

  extractDelimiter(input) {
    const indexCustom = input.indexOf("\\n");
    if (indexCustom === -1) {
      throw new Error("구분자가 잘못 사용되었습니다.");
    }
    const customDelimiter = input.substring(2, indexCustom);
    const numbersPart = input.substring(indexCustom + 2);
    return [customDelimiter, numbersPart];
  }

  parseNumbers(input) {
    const numbers = input.map((num) => {
      const parsed = Number(num);
      if (isNaN(parsed)) {
        throw new Error("숫자가 아닌 값이 포함되어 있습니다.");
      }
      if (parsed < 0) {
        throw new Error("음수는 입력할 수 없습니다.");
      }
      return parsed;
    });
    return numbers;
  }

  printUserOutput(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
