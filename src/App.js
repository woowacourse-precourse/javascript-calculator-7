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

}

export default App;
