import CustomError from "./CustomError.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, OUTPUT_PREFIX } from "./constants.js";

class OutputView {
  constructor() {
    throw new CustomError(ERROR_MESSAGE.PRIVATE_CONSTRUCTOR);
  }

  static printMessage(message) {
    Console.print(this.#getMessageWithOutputPrefix(message));
  }

  static #getMessageWithOutputPrefix(message) {
    return `${OUTPUT_PREFIX}${message}`;
  }
}

export default OutputView;
