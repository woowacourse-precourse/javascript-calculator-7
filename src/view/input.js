import { MissionUtils } from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constants/constants.js';

const { INPUT_MESSAGE } = CONSTANTS;

export const getStringInput = async () => {
  const inputString = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

  return inputString;
};

export const getArrayInput = (inputString) => {
  const inputArray = [...inputString];

  return inputArray;
};
