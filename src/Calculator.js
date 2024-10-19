import { MissionUtils } from "@woowacourse/mission-utils";

class Calculator {
  async start() {
    await this.getInput();
  }

  async getInput() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  calculate(input) {
    if (!input) return 0;

    let delimiters = [",", ":"];
    let numberString = input;

    // 커스텀 구분자 처리
    if (input.startsWith("//")) {
      const parts = input.split("\n");
      if (parts.length < 2 || parts[0].length < 3) {
        throw new Error("[Error] 잘못된 구분자 포맷입니다.");
      }
      const customDelimiter = parts[0].slice(2);
      delimiters.push(customDelimiter);
      numberString = parts[1];
    }

    const regex = new RegExp(`[${delimiters.join("")}]`);
    const numbers = numberString.split(regex).map((num) => {
      const parsed = Number(num);
      if (isNaN(parsed)) {
        throw new Error("[Error] 입력에 숫자가 아닌 값이 포함되었습니다.");
      }
      return parsed;
    });

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default Calculator;
