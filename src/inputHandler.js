import { MissionUtils } from '@woowacourse/mission-utils';

export default async function getUserInput() {
  const userInput =
    await MissionUtils.Console.readLineAsync('계산식을 입력해주세요.\n');
  return userInput;
}
