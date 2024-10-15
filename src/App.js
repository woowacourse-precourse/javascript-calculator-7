import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 입력 기능 구현
    // 1. 덧셈할 문자열을 입력해 주세요. 문구를 띄워주자
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.")
    const STRING_INPUT = await MissionUtils.Console.readLineAsync('')
    // MissionUtils.Console.print(`입력값: ${STRING_INPUT}`) // 입력값 체크
    
  }
}

export default App;
