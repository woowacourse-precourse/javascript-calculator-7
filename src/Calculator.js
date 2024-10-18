import { MissionUtils } from "@woowacourse/mission-utils";

class calculator {
  constructor() {
    this.calculateStart();
  }
  async calculateStart() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
  }
}
