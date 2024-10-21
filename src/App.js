import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const customSeparator = await this.checkCustom(input); // 커스텀 문자열 있는지 확인
    const newInput = await this.checkInput(customSeparator, input); // 커스텀 문자열이 있으면 덧셈할 문자열 추출

    const result = await this.calculateSum(customSeparator, newInput); // 덧셈 계산
    Console.print(`결과 : ${result}`);
  }

  // 커스텀 구분자 있는지 확인
  checkCustom(input) {
    const hasDoubleDash = input.includes("//");
    const hasNewline = input.includes("\\n");

    if (hasDoubleDash && hasNewline) {
      const result = input.match(/\/\/(.*?)\\n/);
      return result[1];
    }

    return "";
  }

  // 덧셈할 문자열 추출
  checkInput(customSeparator, input) {
    if (customSeparator) {
      return input.split("\\n")[1];
    } else {
      return input;
    }
  }

  // input에 따른 계산
  calculateSum(customSeparator, input) {
    if (!input) {
      return 0;
    }

    let separator = new RegExp(`[${customSeparator}|,|:]`);
    const numbers = input.split(separator).map((num) => {
      const number = Number(num);

      // 예외 처리
      if (isNaN(number)) {
        throw new Error("[ERROR]");
      }
      if (number < 0) {
        throw new Error("[ERROR]");
      }

      return number;
    });

    let sum = 0;
    numbers.forEach((num) => {
      sum += num;
    });

    return sum;
  }
}

export default App;
