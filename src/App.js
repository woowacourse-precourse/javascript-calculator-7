import { Console } from "@woowacourse/mission-utils";

const CUSTOM_SEPARATOR_PATTERN = /^\/\/(.)\\n/;

class App {
  constructor() {
    this.separators = [",", ":"];
  }

  async run() {
    try {
      const input = await this.userInput();
      this.checkSeparator(input);
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw error;
    }
  }

  userInput() {
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  checkSeparator(input) {
    const match = input.match(CUSTOM_SEPARATOR_PATTERN);
    if (match) {
      this.separators.push(match[1]);
      const regex = new RegExp(`[${this.separators}]`);
      if (regex.test(input) && input.match(regex).some((el) => el === "")) {
        throw new Error("[ERROR] 연속된 구분자는 허용되지 않습니다.");
      }
    }
  }

  calculate(input) {
    input = input.replace(CUSTOM_SEPARATOR_PATTERN, "");
    const regex = new RegExp(`[${this.separators}]`);
    const numbers = input.split(regex).map((num) => parseInt(num, 10));
    let sum = 0;

    for (const number of numbers) {
      if (number < 0) {
        throw new Error("[ERROR] 숫자는 양수만 가능합니다.");
      }
      sum += number;
    }

    return sum;
  }
}

export default App;
