import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const OutputView = {
  printResult: (result) => {
    Console.print(MESSAGE.OUTPUT.RESULT(result));
  },
  printError: (errorMessage) => {
    Console.print(MESSAGE.OUTPUT.ERROR + errorMessage);
  },
};

export default OutputView;
