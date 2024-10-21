import { Console } from "@woowacourse/mission-utils";
import { ERROR, OUTPUT_MESSAGE } from "../constants/message.js";

export const getOutput = async (result) => {
  if (!isNaN(result) && typeof result === "number") {
    return await Console.print(OUTPUT_MESSAGE + result);
  }
  throw new Error(ERROR + result);
};
