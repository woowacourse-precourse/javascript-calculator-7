import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  calculate(input) {
    if (!input) {
      return 0;
    }

    let delimiter = /[,|:]/;
    let numbersString = input;

    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\\n");

      const customDelimiter = input.substring(2, delimiterEndIndex);
      numbersString = input.substring(delimiterEndIndex + 2);
      delimiter = customDelimiter;
    }

    const numbers = numbersString.split(delimiter).map((num) => {
      const parsedNumber = Number(num.trim());

      return parsedNumber;
    });

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
