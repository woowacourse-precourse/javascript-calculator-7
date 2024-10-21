import { Console } from "@woowacourse/mission-utils";

class App {
  delimiter = [",", ":"];

  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
    const result = this.processInput(input);

    Console.print(`결과: ${result}`);
  }

  processInput(input) {
    if (this.hasCustomDelimiter(input)) {
      input = input.slice(5);
    }
    const numbers = this.extractNumbers(input);
    const sum = this.calculateSum(numbers);
    return sum;
  }

  hasCustomDelimiter(input) {
    if (input.startsWith("//") && input.slice(3, 5) === "\\n") {
      const customDelimiter = input[2];
      this.delimiter.push(customDelimiter);

      return true;
    }
    return false;
  }

  extractNumbers(input) {
    const regex = new RegExp(`[${this.delimiter.join(" ")}]`);
    const numbers = input.split(regex).map((str) => parseInt(str, 10));

    return numbers;
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
