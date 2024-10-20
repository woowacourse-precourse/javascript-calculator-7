import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 사용자의 문자열 입력을 비동기적으로 받아와 트림(trim)한 후 반환한다.
 *
 * @async
 * @function getUserInput
 * @returns {Promise<string>} 사용자가 입력한 문자열의 앞뒤 공백이 제거된 값
 */
export default async function getUserInput() {
  const userInput =
    await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
  return userInput.trim();
}
