import { Console } from "@woowacourse/mission-utils";
import { RESULT_MESSAGE } from "../constants/constants.js";

export class OutputView {
  static sum(sum) {
    return Console.print(RESULT_MESSAGE + sum);
  }
}
