import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 사용자 입력
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await MissionUtils.Console.readLineAsync();

    // 사용자 출력과 에러 출력
    try {
      const result = this.calculateSum(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
  // 빈 문자열 입력시 0 반환
  calculateSum(input) {
    if (input === "") return 0;
  }
}

export default App;