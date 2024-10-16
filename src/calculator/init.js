import { MissionUtils } from '@woowacourse/mission-utils';
import {
  hasCustomSeparator,
  setCustomSeparator,
  splitBySeparators,
} from './separator.js';

/**
 * 사용자에게 문자열을 입력받는 함수
 * @returns {Promise<string>} 입력받은 문자열
 * @throws 입력 도중 오류 발생 시 에러를 발생
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
 * 입력된 문자열을 통해 구분자 집합과 계산이 필요한 문자열 반환
 */
const processInputString = (inputString) => {
  if (hasCustomSeparator(inputString)) {
    return setCustomSeparator(inputString);
  } else {
    return {
      separators: new Set([',', ':']),
      remainingString: inputString,
    };
  }
};

/**
 * 배열의 요소들을 모두 더한 값을 반환하는 함수
 *
 * @param {number[]} arr - 더할 숫자들이 포함된 배열
 * @returns {number} 배열 요소들의 합계
 */
const sumArrayElements = (arr) => {
  return arr.reduce((acc, element) => acc + element, 0);
};

/**
 * 프로그램 실행 함수
 * 사용자에게 입력을 받아 구분자를 확인 후, 구분자로 문자열을 나누고 덧셈을 한 후 결과를 출력한다.
 */
const init = async () => {
  try {
    const inputString = await getInput();
    const { separators, remainingString } = processInputString(inputString);
    const calculationArr = splitBySeparators(separators, remainingString);
    MissionUtils.Console.print(`결과 : ${sumArrayElements(calculationArr)}`);
  } catch (error) {
    MissionUtils.Console.print(`[Error] ${error.message}`);
  }
};

export default init;
