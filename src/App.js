import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const result = await this.calculateSum(input);

    Console.print(`결과: ${result}`);
  }

  // input에 따른 계산
  calculateSum(input) {
    if (!input) {
      return 0;
    }

    const numbers = input.split(/,|:/).map((num) => Number(num));
    let sum = 0;

    numbers.forEach((num) => {
      sum += num;
    });

    return sum;
  }
}

export default App;
