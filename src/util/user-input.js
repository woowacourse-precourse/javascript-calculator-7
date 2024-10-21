import { Console } from '@woowacourse/mission-utils';

async function userInput(message) {
  return await Console.readLineAsync(message);
}

export default userInput;
