import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, RESULT_MESSAGE } from "../constants/constants.js";

export class OutputView {
  static sum(sum) {
    return Console.print(RESULT_MESSAGE + sum);
  }

  static error(errorMessage) {
    return Console.print(ERROR_MESSAGE.TAG + errorMessage);
  }
}
