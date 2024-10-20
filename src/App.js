import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n", (INPUT));
    // 빈 문자열은 0을 반환한다.
    if (INPUT === "") {
      Console.print(`결과 : 0`)
    } else {
      Console.print(`결과 : ${INPUT}`)
    }

  //g
  }
}

export default App;
