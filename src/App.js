import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Console } = require("@woowacourse/mission-utils");

class StringCalculator {
  // 빈 문자열 처리
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    return 0;
  }
}

class App {
  async run() {
    const calculator = new StringCalculator();

    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = calculator.add(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
