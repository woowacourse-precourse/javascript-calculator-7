import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  static printResult(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  static printError(message) {
    MissionUtils.Console.print(`${message}`);
  }
}

export default OutputView;
