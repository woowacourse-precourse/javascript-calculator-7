import { Console } from '@woowacourse/mission-utils';
import { outputMessage } from '../constant.js';

export async function inputText() {
  return await Console.readLineAsync(`${outputMessage.startMessage}\n`);
}

export function printSumResult(result) {
  Console.print(`결과 : ${result}`);
}
