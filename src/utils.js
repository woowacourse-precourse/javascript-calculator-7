import { MissionUtils } from "@woowacourse/mission-utils";

export async function readInput(string) {
  let inputValue = "";

  try {
    inputValue = await MissionUtils.Console.readLineAsync(string);
  } catch (err) {
    throw new Error(err);
  }

  return inputValue;
}

export async function printOutput(string) {
  try {
    MissionUtils.Console.print(string);
  } catch (err) {
    throw new Error(err);
  }
}
