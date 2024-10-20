import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./messages.js";

const InterfaceUtil = {
  async inputString() {
    try {
      return await Console.readLineAsync(MESSAGES.INPUT);
    } catch (error) {
      throw new Error(MESSAGES.ERROR);
    }
  },

  printResult(sum) {
    Console.print(MESSAGES.RESULT + sum);
  },
};

export default InterfaceUtil;
