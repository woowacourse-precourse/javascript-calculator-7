import CustomError from "./CustomError.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_QUERY } from "./constants.js";

class InputView {
  constructor() {
    throw new CustomError(ERROR_MESSAGE.PRIVATE_CONSTRUCTOR);
  }

  static async readInput() {
    return Console.readLineAsync(INPUT_QUERY);
  }
}

export default InputView;
