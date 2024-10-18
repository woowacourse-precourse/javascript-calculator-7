import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_INFO_MESSAGE } from './constants.js';

export async function getUserInput() {
  return await MissionUtils.Console.readLineAsync(INPUT_INFO_MESSAGE);
}

export function printResult(str) {
  MissionUtils.Console.print(`결과 : ${str}`);
}

export function getStringifiedString(str) {
  return JSON.stringify(str);
}

export function getSum(numberArray) {
  return numberArray.reduce((prev, cur) => prev + cur, 0);
}

export function checkTheNumberArray(array) {
  if (!Array.isArray(array)) throw new Error(ERROR_MESSAGE);
  for (const item of array) {
    if (item === '') continue;
    if (isNaN(item) || Number(item) <= 0) throw new Error(ERROR_MESSAGE);
  }
}

export function getNumberArray(array) {
  return array.map(it => Number(it));
}

export function getOrRegExpFromString(separator) {
  return new RegExp(`[${separator}]`);
}
