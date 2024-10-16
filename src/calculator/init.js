import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 사용자에게 문자열을 입력받는 함수
 * @returns {Promise<string>} 입력받은 문자열
 * @throws 입력 도중 오류 발생 시 에러를 던집니다.
 */
const getInput = async () => {
  try {
    const inputString = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return inputString;
  } catch {
    throw new Error('입력을 받는 도중 오류가 발생했습니다.');
  }
};

/**
 * 프로그램 실행 함수
 * 사용자에게 입력을 받아 구분자를 확인 후, 구분자로 문자열을 나누고 덧셈을 한 후 결과를 출력한다.
 */
const init = async () => {
  try {
    const inputString = await getInput();
  } catch (error) {
    MissionUtils.Console.print(`[Error] ${error.message}`);
  }
};

export default init;
