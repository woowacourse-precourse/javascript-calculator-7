import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Message.js";

export default class OutPutView {
  static printResult(result) {
    Console.print(MESSAGE.RESULT_MESSAGE + result);
  }
}
