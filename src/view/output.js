import { MissionUtils } from '@woowacourse/mission-utils';

import { CONSTANTS } from '../constants/constants.js';

const { OUTPUT_MESSAGE } = CONSTANTS;

export const printResult = (result) => {
  MissionUtils.Console.print(`${OUTPUT_MESSAGE}${result}`);
};
