import { Console } from "@woowacourse/mission-utils";

class App {
  splitBySeparator = (input) => {
    // 입력받은 문자열을 구분자로 나눈다.
    if (input.length === 0) {
      return 0;
    }
  };

  solve = (input) => {
    try {
      const seperatedInput = this.splitBySeparator(input);
    } catch (error) {
      console.error(error.message);
    }
  };

  async run() {
    // 사용자로부터 덧셈할 문자열을 입력받는다.
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.").then((input) => {
      this.solve(input);
    });
  }
}

export default App;
