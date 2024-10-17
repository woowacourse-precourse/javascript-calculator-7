import { MissionUtils } from "@woowacourse/mission-utils";
import { inputMessage } from "../constants/Messages.js";

export class InputHandler {
  async getInput() {
    return await MissionUtils.Console.readLineAsync(inputMessage);
  }
}