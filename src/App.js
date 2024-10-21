import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from "./calculator.js";

class App {
  async run() { /* 프로그램의 시작점 */
    MissionUtils.Console.print('덧셈할 문자열을 입력해주세요.')
    const input = await MissionUtils.Console.readLineAsync('')
    try {
      const calculator = new Calculator()
      calculator.customizeSeparator(input)
      MissionUtils.Console.print(`결과 : ${calculator.readString(input)}`)
    } catch (err) {
      console.error(err.message)
      throw err
    }
  }
}

export default App;
