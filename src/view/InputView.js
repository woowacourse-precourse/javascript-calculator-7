import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_INPUT_PROMPT } from "../constants/constants.js";

const InputView = {
  async readStringInput() {
    try {
      const inputValue = await Console.readLineAsync(MESSAGE_INPUT_PROMPT);
      return inputValue;
    } catch (error) {
      Console.print(error.message);
    }
  },
}

export default InputView;