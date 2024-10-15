import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/message.js";

export default class Input {
  async getUserInput() {
    Console.print(GAME_MESSAGE.inputPrompt);
    const userInput = Console.readLineAsync("");

    return userInput;
  }
}
