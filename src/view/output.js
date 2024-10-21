import { MissionUtils } from '@woowacourse/mission-utils';

import { OUTPUT_MESSAGE } from '../constants/message/output-message.js';

export const printResult = (result) => {
  MissionUtils.Console.print(`${OUTPUT_MESSAGE}${result}`);
};
