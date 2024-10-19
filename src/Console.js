import { MissionUtils } from "@woowacourse/mission-utils";

export class Console {
  async read(input) {
    return MissionUtils.Console.readLineAsync(input);
  }

  print(input) {
    return MissionUtils.Console.print(input);
  }
}
