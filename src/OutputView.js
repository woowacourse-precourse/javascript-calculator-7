import { OUTPUT_MESSAGE } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";

/**
 * 출력 기능
 */

const OutputView = {
  printResult(result) {
    Console.print(`${OUTPUT_MESSAGE.RESULT}${result}`);
  },
};

export default OutputView;
