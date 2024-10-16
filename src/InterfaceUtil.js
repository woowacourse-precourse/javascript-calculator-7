import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./messages.js";

const InterfaceUtil = {
  async inputString() {
    return await Console.readLineAsync(MESSAGES.INPUT);
  },

  printResult(sum) {
    Console.print(MESSAGES.RESULT + sum);
  },
};

export default InterfaceUtil;
