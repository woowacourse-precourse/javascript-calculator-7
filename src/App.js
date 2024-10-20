import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    try {
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  calculateSum(input) {
    if (input === "") return 0;

    let delimiters = [",", ":"];

    if (input.startsWith("//")) {
      const parts = input.split("\n");
      if (parts.length < 2) {
        throw new Error("커스텀 구분자 형식이 잘못되었습니다.");
      }
      delimiters.push(parts[0].substring(2));
      input = parts[1];
    }

    const numbers = input
      .split(new RegExp(`[${delimiters.join("")}]`))
      .map((num) => {
        const parsedNum = parseInt(num.trim(), 10);
        if (isNaN(parsedNum)) {
          throw new Error("잘못된 숫자 형식이 포함되어 있습니다.");
        }
        if (parsedNum < 0) {
          throw new Error("음수를 입력할 수 없습니다.");
        }
        return parsedNum;
      });

    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
