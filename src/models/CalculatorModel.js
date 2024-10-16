import { MissionUtils } from '@woowacourse/mission-utils';

export function parseNumbers(input) {
  const delimiter = /,|:/;
  const numbers = input.split(delimiter).map(Number);
  return numbers;
}
