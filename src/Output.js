import { MissionUtils } from "@woowacourse/mission-utils";

class Output {
  /**
   * 덧셈 결과를 출력합니다.
   * @param {number} result - 덧셈 결과
   */
  static printResult(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }
}

export default Output;
