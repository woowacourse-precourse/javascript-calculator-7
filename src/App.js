import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const sum = this.calculate(input);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
  calculate(input) {
    if (input.trim() === "") {
      return 0;
    }

    const { delimiter, numbersPart } = this.parseInput(input);
    const numbers = numbersPart.split(delimiter);
    return this.sumNumbers(numbers);
  }

  parseInput(input) {
    let delimiter = /[,|:]/;
    let numbersPart = input;

    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      if (delimiterEndIndex === -1) {
        throw new Error("잘못된 입력 형식입니다.");
      }
      delimiter = new RegExp(input.substring(2, delimiterEndIndex));
      numbersPart = input.substring(delimiterEndIndex + 1);
    }

    return { delimiter, numbersPart };
  }

  sumNumbers(numbers) {
    return numbers.reduce((total, num) => {
      const number = parseInt(num, 10);
      if (isNaN(number)) {
        throw new Error("잘못된 숫자가 포함되어 있습니다.");
      }
      if (number < 0) {
        throw new Error("음수는 허용되지 않습니다.");
      }
      return total + number;
    }, 0);
  }
}

export default App;
