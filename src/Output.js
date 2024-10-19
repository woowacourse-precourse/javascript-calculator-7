import { MissionUtils } from "@woowacourse/mission-utils";

class Output {
  result;

  constructor(result) {
    this.result = result;
  }

  printResult() {
    MissionUtils.Console.print(`결과 : ${this.result}`);
  }
}

export default Output;
