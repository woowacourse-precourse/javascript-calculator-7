import { Console } from '@woowacourse/mission-utils';

export async function getInput(prompt) {
  return await Console.readLineAsync(prompt);
}

export function printResult(result) {
  Console.print(`결과 : ${result}`);
}

export function printError(error) {
  Console.print(error.message);
}
