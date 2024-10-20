import { Console } from "@woowacourse/mission-utils";
import { uiConstants } from "../constants/index.js";

export async function inputStr() {
  let inputStr = await Console.readLineAsync(`${uiConstants.INPUT_MESSAGE}`);
  return inputStr;
}

export function strPrint(str) {
  Console.print(`${uiConstants.RESULT} : ${str}`);
}