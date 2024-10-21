import { Console } from '@woowacourse/mission-utils';

async function input() {
  const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
  return userInput;
}

export default input;
