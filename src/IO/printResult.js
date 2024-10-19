import { MissionUtils } from '@woowacourse/mission-utils';

export default function printResult(result = 0) {
  MissionUtils.Console.print(`결과 : ${result}`);
}
