import { BASIC_MESSAGES } from "../constant/messages.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async getCalcNumber() {
    return await Console.readLineAsync(BASIC_MESSAGES.stringInputMessage);
  },
};

export default InputView;
