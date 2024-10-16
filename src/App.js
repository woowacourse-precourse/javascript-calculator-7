import { MissionUtils } from "@woowacourse/mission-utils";
const Console = MissionUtils.Console;

class App {
  async run() {
    Console.print(
      this.processInput(
        await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.")
      )
    ); // 1단계: 그대로 출력
  }
  processInput(inputstr) {
    const condCustomInput = /(\/\/.{1}\\n.+)/;
    // 커스텀 구분자가 있는지 확인
    // 커스텀 구분자가 있을 경우
    // 커스텀 구분자가 없을 경우
    return inputstr;
  }
}

export default App;
