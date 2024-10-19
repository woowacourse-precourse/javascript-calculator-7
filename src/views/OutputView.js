import { Console } from "@woowacourse/mission-utils";
import Messages from "../constants/Messages.js";

const outputView = (sum) => {
  return Console.print(`${Messages.OUTPUT_MESSAGE}${sum}`);
};

export default outputView;
