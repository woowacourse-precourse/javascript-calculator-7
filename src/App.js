import { Console } from "@woowacourse/mission-utils";

class App {
  solve = (input) => {};

  async run() {
    // 사용자로부터 덧셈할 문자열을 입력받는다.
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.").then((input) => {
      this.solve(input);
    });
  }
}

export default App;
