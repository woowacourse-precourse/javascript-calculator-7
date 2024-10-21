import { Console } from "@woowacourse/mission-utils";
import { IO_MESSAGES } from "../constants";

class ConsoleView {
  async readInput() {
    return await Console.readLineAsync(IO_MESSAGES.INPUT);
  }

  displayResult(result) {
    Console.print(`${IO_MESSAGES.RESULT}${result}`);
  }
}

export default ConsoleView;
