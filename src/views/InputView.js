import { Console } from "@woowacourse/mission-utils";
import Messages from "../constants/Messages";

const inputView = () => {
  return Console.readLineAsync(Messages.INPUT_MESSAGE);
};

export default inputView;
