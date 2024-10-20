import { Console } from "@woowacourse/mission-utils";
import { StartMessage } from "../common/message.js";

const getInput = async () => {
  const input = await Console.readLineAsync(StartMessage);

  return input;
};

export default getInput;
