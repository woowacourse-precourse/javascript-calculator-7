import { Console } from "@woowacourse/mission-utils";
import { INPUT_FORMAT } from "../utils/input.contants.js";

export const getInput = async () => {
  const input = await Console.readLineAsync(INPUT_FORMAT);
  return input;
};
