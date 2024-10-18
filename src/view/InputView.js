import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

export class InputView {
  static string() {
    return Console.readLineAsync(INPUT_MESSAGE);
  }
}
