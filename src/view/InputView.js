import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const InputView = {
  readString: async () => {
    const input = await Console.readLineAsync(MESSAGE.INPUT.STRING);

    return input;
  },
};

export default InputView;
