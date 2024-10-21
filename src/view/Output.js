import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_FORMAT } from "../utils/output.constants.js";

export async function printOutput(result) {
  Console.print(`${OUTPUT_FORMAT}${result}`);
}
