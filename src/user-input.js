import { Console } from '@woowacourse/mission-utils';
import { printMessage } from './print-message';
import { PROMPT_USER_INPUT } from './constant';

async function userInput() {
  return await Console.readLineAsync(PROMPT_USER_INPUT);
}

export default userInput;
