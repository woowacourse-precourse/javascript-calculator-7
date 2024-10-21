import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/Messages.js";

export class OutputHandler {
  print(result) {
    MissionUtils.Console.print(OUTPUT_MESSAGE + result);
  }
}