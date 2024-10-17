import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/Message.js";

export default class InputView {
  static async getUserInput() {
    const input = await Console.readLineAsync(MESSAGE.startMessage + "\n");
    return input;
  }
}
