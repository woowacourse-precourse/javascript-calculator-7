import { Console } from "@woowacourse/mission-utils";
import parseInput from "../utils/parser.js";

function calculateSum(input) {
  const numbers = parseInput(input);
  Console.print(`Model : ${numbers}`);
}

export default calculateSum;
