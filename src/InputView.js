import { Console } from "@woowacourse/mission-utils";
import { READ } from "./utils/messages.js";

const InputView = {
  async readString() {
    const input = await Console.readLineAsync(READ.STRING);
    return input;
  },
};

export default InputView;
