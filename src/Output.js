import { MissionUtils } from "@woowacourse/mission-utils";
import { RESULT_MESSAGE } from "./constants/printMessage.js";

class Output {
  /**
   * 덧셈 결과를 출력합니다.
   * @param {number} result - 덧셈 결과
   */
  static printResult(result) {
    MissionUtils.Console.print(`${RESULT_MESSAGE}${result}`);
  }
}

export default Output;
