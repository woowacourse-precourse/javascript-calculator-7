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

      if (delimiterEndIndex === -1) {
        throw new Error("[ERROR]");
      }

      const customDelimiter = input.substring(2, delimiterEndIndex);

      numbersString = input.substring(delimiterEndIndex + 2);

      delimiter = customDelimiter;
    }

    const singleNumber = Number(numbersString.trim());
    if (!isNaN(singleNumber)) {
      return singleNumber;
    }

    const numbers = numbersString.split(delimiter).map((num) => {
      const trimmedNum = num.trim();

      if (trimmedNum === "") {
        throw new Error("[ERROR]");
      } else if (isNaN(Number(trimmedNum))) {
        throw new Error("[ERROR]");
      }
      return Number(trimmedNum);
    });

    if (numbers.some((num) => num < 0)) {
      throw new Error("[ERROR]");
    }

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
