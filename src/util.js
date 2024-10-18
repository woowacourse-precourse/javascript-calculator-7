import { Console } from '@woowacourse/mission-utils';
import { outputMessage } from './constant.js';

export async function inputText() {
  Console.print(outputMessage.startMessage);
  return await Console.readLineAsync('');
}

export function printSumResult(result) {
  Console.print(`결과 : ${result}`);
}
