import { Console } from "@woowacourse/mission-utils";

class App {
  validateInput(input) {
    const sep = /[^0-9,:]/;
    const customSep = /^\/\/\D\\n/;

    if (!sep.test(input)) {
      return 0;
    } else if (customSep.test(input)) {
      const pattern = new RegExp(`[^0-9${input[2]}]`);
      if (!pattern.test(input.slice(5))) {
        return 1;
      }
    }

    return -1;
  }

  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }
}

export default App;
