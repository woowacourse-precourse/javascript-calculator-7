import { MissionUtils } from '@woowacourse/mission-utils';

export default async function getUserInput() {
  const userInput =
    await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
  return userInput.trim();
}
