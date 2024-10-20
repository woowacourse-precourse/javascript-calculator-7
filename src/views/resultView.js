import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 계산 결과를 콘솔에 출력한다.
 *
 * @function printResult
 * @param {number} [result=0] - 출력할 계산 결과 (기본값은 0)
 */
export default function printResult(result = 0) {
  MissionUtils.Console.print(`결과 : ${result}`);
}
