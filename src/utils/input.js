import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

export const getInput = async () => {
  return await Console.readLineAsync(INPUT_MESSAGE);
};
