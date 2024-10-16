import { Console } from '@woowacourse/mission-utils';
import { printMessage } from './print-message';
import { PROMPT_USER_INPUT } from './constant';

async function userInput() {
  printMessage(PROMPT_USER_INPUT);
  return await Console.readLineAsync();
}

export default userInput;
