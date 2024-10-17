import { Console } from "@woowacourse/mission-utils";
import { BASIC_MESSAGES } from "../constant/messages.js";

class OutputView {
  printCalcsum(message) {
    Console.print(BASIC_MESSAGES.calcOutputMessage(message));
  }

  printExit(message) {
    Console.print(BASIC_MESSAGES.exitMessage(message));
  }
}

export default OutputView;
