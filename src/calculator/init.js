import { MissionUtils } from '@woowacourse/mission-utils';
import { Calculator } from './calculator.js';

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

const init = async () => {
  const calculator = new Calculator();

  const inputString = await getInput();
  const result = calculator.calculate(inputString.trim());

  MissionUtils.Console.print(`결과 : ${result}`);
};

export default init;
