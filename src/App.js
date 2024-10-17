import { MissionUtils } from "@woowacourse/mission-utils";
import { Calculator } from "./Calculator";
class App {
  async run() {
    // 사용자로부터 입력을 비동기로 받는다
    const input = await MissionUtils.Console.readLineAsync();
    const calculator = new Calculator(); // 계산 객체 생성
    // 비동기 입력 오류 상황 예외처리
    try {
      const result = calculator.calculate(input); // 계산 함수 실행
      MissionUtils.Console.print(`${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR]`);
      throw error;
    }
  }
}

export default App;
