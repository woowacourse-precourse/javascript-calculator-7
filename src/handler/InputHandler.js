import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/Messages.js";

export class InputHandler {
  async getInput() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
  }
}