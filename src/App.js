import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getInput();
      const parseInput = this.parseString(input);
      const result = this.calculateSum(parseInput);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      throw Error("[ERROR]");
    }
  }

  // input을 받는 함수
  async getInput() {
    return await MissionUtils.Console.readLineAsync();
  }

  // string인 input을 구분자 기준으로 쪼개서 숫자로 변환할 배열에 담는다.
  parseString(input) {}

  // 구분자를 제외한 문자열형식의 숫자들이 든 배열을 input으로 받아, 실제 숫자인지, 음수인지 검사한다.
  // 숫자가 아니거나 음수이면 예외 처리를 한다.
  verifyNumber(numbers) {}

  // 파싱한 숫자를 더한다.
  calculateSum(numbers) {}
}

export default App;
