import { Console } from "@woowacourse/mission-utils";
import { PROMT_MESSAGE } from "./constants/message.js";

export default class Input {
  async getUserInput() {
    Console.print(PROMT_MESSAGE.inputPrompt);
    const userInput = await Console.readLineAsync("");

    return userInput;
  }
}
