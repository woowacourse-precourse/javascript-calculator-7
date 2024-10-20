import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.").then(function (
      result
    ) {
      Console.print(result);
    });
  }
}

export default App;
