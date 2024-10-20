import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then(function (
      result
    ) {
      Console.print("결과 : " + result);
    });
  }
}

export default App;
