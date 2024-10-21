import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
    const result = this.processInput(input);

    Console.print(`결과: ${result}`);
  }

  processInput(input) {
    const numbers = this.extractNumbers(input);
    const sum = this.calculateSum(numbers);
    return sum;
  }

  extractNumbers(input) {
    const numbers = input.split(/[, :]/).map((str) => parseInt(str, 10));
    return numbers;
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
