import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const result = this.add(input);
    Console.print(`결과 : ${result}`);
  }

  add(input) {
    if (!input) {
      return 0;
    }

    const numbers = input.split(/,|:/).map((num) => {
      return parseInt(num, 10);
    });

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
