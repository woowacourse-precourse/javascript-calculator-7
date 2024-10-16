import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_RESULT_OUTPUT } from "../constants/constants.js";

const OutputView = {
  printResultValue(resultValue) {
    Console.print(`${MESSAGE_RESULT_OUTPUT}${resultValue}`);
  },
}

export default OutputView;