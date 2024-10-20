import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요."
      );
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculate(input) {
    if (!input) {
      return 0;
    }

    let delimiterPattern = /[,:]/;
    let numbers = input;

    if (input.startsWith("//")) {
      const parts = input.split("\n");
      if (parts.length < 2 || parts[0].length < 3) {
        throw new Error("[ERROR] Invalid input format");
      }
      const customDelimiter = parts[0].substring(2);
      delimiterPattern = new RegExp(`[${customDelimiter},:]`);
      numbers = parts[1];
    }

    const splitNumbers = numbers.split(delimiterPattern);
    const sum = splitNumbers.reduce((acc, num) => {
      const trimmedNum = num.trim();
      if (isNaN(trimmedNum) || trimmedNum === "") {
        throw new Error("[ERROR] Invalid number in input");
      }
      return acc + parseInt(trimmedNum, 10);
    }, 0);

    return sum;
  }
}

export default App;
