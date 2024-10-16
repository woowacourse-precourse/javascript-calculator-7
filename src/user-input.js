import { Console } from '@woowacourse/mission-utils';
import { printMessage } from './print-message';
import { PROMPT_USER_INPUT } from './constant';

export function userInput() {
  printMessage(PROMPT_USER_INPUT);
  return Console.readLineAsync();
}
