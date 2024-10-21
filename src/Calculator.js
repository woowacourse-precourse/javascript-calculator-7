import { MissionUtils } from "@woowacourse/mission-utils";

class Calculator {
  async start() {
    const input = await this.getInput();
    try {
      const result = this.calculate(this.parseInt(input));
      this.printResult(result);
    } catch (error) {
      throw error;
    }
  }

  async getInput() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return input;
  }

  parseInt(input) {
    if (!input) return { delimiters: [",", ":"], numberString: "" };

    let delimiters = [",", ":"];
    let numberString = input;

    if (input.startsWith("//")) {
      const parts = input.split("\\n");
      if (parts.length < 2 || parts[0].length < 3) {
        throw new Error("[ERROR] 잘못된 구분자 포맷입니다.");
      }
      const customDelimiter = parts[0].slice(2);
      delimiters.push(customDelimiter);
      numberString = parts[1];
    }

    if (!numberString || numberString.trim() === "") {
      throw new Error("[ERROR] 구분자 이후에 숫자가 입력되지 않았습니다.");
    }

    return { delimiters, numberString };
  }

  calculate({ delimiters, numberString }) {
    const regex = new RegExp(`[${delimiters.join("")}]`);
    const numbers = numberString.split(regex).map((num) => {
      const parsed = Number(num);
      if (isNaN(parsed)) {
        throw new Error("[ERROR] 입력에 숫자가 아닌 값이 포함되었습니다.");
      }
      if (parsed < 0) {
        throw new Error("[ERROR] 음수는 허용되지 않습니다.");
      }
      return parsed;
    });

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  printResult(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }
}

export default Calculator;
