import { Console } from "@woowacourse/mission-utils";
import CheckCustomDelimiter from "./StringProcesing.js";
import { MESSAGE } from "./content.js";
//import { numberSum } from "./StringProcesing.js";

export async function getInput() {
  const input = await Console.readLineAsync(MESSAGE.START_CALCULATOR);
  const checkCustomDelimiter = new CheckCustomDelimiter(input);

  checkCustomDelimiter.numberExtract();
  const result = checkCustomDelimiter.numberSum();
  printOutput(result);
}

export function printOutput(result) {
  // return Console.print("결과: ");
  return Console.print(MESSAGE.CALCULATOR_RESULT + result);
}

//const result = checkCustomDelimiter.numberSum();
//Console.print(result);
