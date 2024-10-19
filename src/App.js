import { MissionUtils } from "@woowacourse/mission-utils";
import calculator from "./calculator.js";

class App {
  async run() {
    try {
      const operand =
        await MissionUtils.Console.readLineAsync(
          "덧셈할 문자열을 입력해주세요\n"
        );

      if (!operand.trim()) {
        MissionUtils.Console.print("결과 : 0"); // 빈 문자열이 입력된 경우 0
        return;
      }

      if (!/^\d/.test(operand) && !operand.startsWith("//")) {
        throw new Error("[ERROR] 입력값은 숫자나 '//'로 시작해야 해요."); // 숫자나 커스텀 구분자로 시작하지 않는 경우
      }

      const result = calculator(operand);
      MissionUtils.Console.print("결과 : " + result);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
