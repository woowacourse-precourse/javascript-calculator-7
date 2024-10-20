import { MissionUtils } from '@woowacourse/mission-utils';

const getUserInput = async function getUserInputFunc() {
  const inputString = await MissionUtils.Console.readLineAsync(
    '\n덧셈할 문자열을 입력해 주세요.\n',
  );
  return inputString;
};

const printResult = function printResultFunc(total) {
  MissionUtils.Console.print(`결과 : ${total}`);
};

export { getUserInput, printResult };
