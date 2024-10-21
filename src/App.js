import { MissionUtils } from "@woowacourse/mission-utils";
import { customizeSeparator, readString } from "./calculator.js";

class App {
  async run() { /* 프로그램의 시작점 */
    MissionUtils.Console.print('덧셈할 문자열을 입력해주세요.')
    const input = await MissionUtils.Console.readLineAsync("")
    try {
      // 커스텀 구분자 지정
      let customSeparator = true;
      customSeparator = customizeSeparator(customSeparator, input)

      // 문자열 탐색
      let startIndex = 0
      if ((typeof customSeparator) == 'string') startIndex = 5   
      const result = readString(customSeparator, input, startIndex)

      MissionUtils.Console.print(`결과 : ${result}`)
    } catch (err) {
      console.error(err.message)
      throw err
    }
  }
}

export default App;
