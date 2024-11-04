import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGES from '../assets/message.js';

const getUserInput = async function getUserInputFunc() {
  const inputString = await MissionUtils.Console.readLineAsync(
    MESSAGES.START_INFORM,
  );
  return inputString;
};

const printResult = function printResultFunc(total) {
  MissionUtils.Console.print(`결과 : ${total}`);
};

export { getUserInput, printResult };
