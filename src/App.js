import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
    // 빈 문자열은 0을 반환한다.
    if (INPUT === "") {
      Console.print(`결과 : 0`);
      return;
    }
    //구분자를 사용해 숫자를 분리한다
    let DELIMITER = /,|:/;

    const NUMBERS = INPUT.split(DELIMITER).map(Number)
    // 분리한 숫자의 합을 반환한다
    const RESULT = NUMBERS.reduce((sum, num) => sum + num, 0)
    
    Console.print(`결과 : ${RESULT}`);
  }
}

export default App;
