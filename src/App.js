import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    const numbers = this.splitNumbersByDelimiter(input);
    const result = this.calculateSum(numbers);

    Console.print(`결과 : ${result}`);
  }

  splitNumbersByDelimiter(input) {
    const DELIMITERS = /[,:]/;
    const stringNumbers = input.split(DELIMITERS);

    return stringNumbers.map(num => parseInt(num));
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
