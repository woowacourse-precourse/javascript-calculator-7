import { Console } from "@woowacourse/mission-utils";

class App {
  run() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.')
      .then((input) => {
        // 입력값을 처리할 예정
      });
  }
}

export default App;
