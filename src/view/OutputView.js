import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, MESSAGE_RESULT_OUTPUT, MESSAGE_ERROR_OUTPUT } from "../constants/constants.js";

const OutputView = {
  printResultValue(resultValue) {
    Console.print(`${MESSAGE_RESULT_OUTPUT} ${resultValue}`);
  },
  printErrorMessage(errorCode) {
    throw new Error(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[errorCode]}`);
  },
}

export default OutputView;