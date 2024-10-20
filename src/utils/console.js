import { Console } from '@woowacourse/mission-utils';

export async function enter(message = '') {
  return Console.readLineAsync(message);
}

export function print(message = '') {
  Console.print(message);
}
