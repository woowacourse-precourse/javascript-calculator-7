import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGES } from "../constants/messages.js";

const input = {
  getStringToPlus: async () => await Console.readLineAsync(CONSOLE_MESSAGES.GET_STRING),
};

export default input;
