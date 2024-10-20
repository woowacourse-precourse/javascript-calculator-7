import { Console } from '@woowacourse/mission-utils';

export function throwError(message) {
  const errorMessage = `[ERROR] ${message}`;
  throw new Error(errorMessage);  
}

export function printMessage(message) {
  Console.print(message);
}