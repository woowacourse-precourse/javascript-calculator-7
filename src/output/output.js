import { MissionUtils } from "@woowacourse/mission-utils";

export default function printResult(output) {
  if (!isNaN(output)) {
    MissionUtils.Console.print(`결과 : ${output}`);
  } else {
    //에러메세지 출력
    MissionUtils.Console.print(output);
  }
}