import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    try {
      const result = this.add(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  add(input) {
    if (!input) {
      return 0;
    }

    if (input.includes("\\n")) {
      input = input.replace(/\\n/g, "\n");
    }

    let delimiter = /,|:/;
    if (input.startsWith("//")) {
      const customDelimiterMatch = input.match(/^\/\/(.)\n/);
      if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        input = input.split("\n")[1];
      } else {
        throw new Error(`[ERROR] Invalid custom delimiter : ${input}`);
      }
    }

    const numbers = input.split(delimiter).map((num) => {
      if (isNaN(num) || num.trim() === "") {
        throw new Error(`[ERROR] Invalid input : ${input}`);
      }
      return parseInt(num, 10);
    });

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;