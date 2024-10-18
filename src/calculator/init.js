import { MissionUtils } from '@woowacourse/mission-utils';
import {
  hasCustomSeparator,
  setCustomSeparator,
  splitBySeparators,
} from './separator.js';

const getInput = async () => {
  try {
    const inputString = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return inputString;
  } catch {
    throw new Error('[ERROR] 입력을 받는 도중 오류가 발생했습니다.');
  }
};

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

const sumArrayElements = (arr) => {
  return arr.reduce((acc, element) => acc + element, 0);
};

const init = async () => {
  const inputString = await getInput();
  const { separators, remainingString } = processInputString(inputString);
  const calculationArr = splitBySeparators(separators, remainingString);
  MissionUtils.Console.print(`결과 : ${sumArrayElements(calculationArr)}`);
};

export default init;
