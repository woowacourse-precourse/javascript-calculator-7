import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const USER_INPUT = await Console.readLineAsync("입력값을 입력해주세요.");
    // :라는 기호가 있다면 무조건 ,로 대체하기
    const NUMBERS = USER_INPUT.replace(/:/g, ",").split(",");
    // 우선 NUMBERS 문자열을 정수로 바꿔서 더해줘야함
    const TOTAL_SUM = NUMBERS.reduce((sum, num) => sum + parseInt(num, 10), 0);
    Console.print(TOTAL_SUM);
  }
}

export default App;
