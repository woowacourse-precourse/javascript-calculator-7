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
 * 입력된 문자열에 커스텀 구분자를 지정하는지 확인하는 함수
 * @param {string} inputString - 검사할 입력 문자열
 * @returns {boolean} 커스텀 구분자를 지정하는 문자열이 포함하면 true, 그렇지 않으면 false
 */
const hasCustomSeparator = (inputString) => {
  // 문자열의 시작이 '/'인지 확인하는 정규 표현식
  const pattern = /^\//;

  // 정규 표현식이 일치하면 true 반환
  if (pattern.test(inputString)) {
    return true;
  }

  // 정규 표현식이 일치하지 않으면 false 반환
  return false;
};

/**
 * 프로그램 실행 함수
 * 사용자에게 입력을 받아 구분자를 확인 후, 구분자로 문자열을 나누고 덧셈을 한 후 결과를 출력한다.
 */
const init = async () => {
  try {
    // 사용자에게 문자열을 입력 받음
    const inputString = await getInput();

    // 입력된 문자열에 커스텀 구분자가 있는지 확인
    if (hasCustomSeparator(inputString)) {
    } else {
    }
  } catch (error) {
    // 에러 메시지를 출력
    MissionUtils.Console.print(`[Error] ${error.message}`);
  }
};

export default init;
