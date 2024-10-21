import { MissionUtils } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from '../constants/message/input-message.js';

export const getStringInput = async () => {
  const inputString = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

  return inputString;
};

export const getArrayInput = (inputString) => {
  const inputArray = [...inputString];

  return inputArray;
};
