import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGES } from "../constants/messages.js";

const output = {
  result: (result) => {
    Console.print(CONSOLE_MESSAGES.GET_RESULT(result));
  },
};

export default output;
