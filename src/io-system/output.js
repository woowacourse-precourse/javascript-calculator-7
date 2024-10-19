import { Console } from '@woowacourse/mission-utils';
import { TEXT_MESSAGE } from '../constant/message.js';

/**
 * 계산 결과를 받아 출력하는 함수입니다.
 */

function Output(result) {
    Console.print(`${TEXT_MESSAGE.OUTPUT_TEXT} ${result}`);
}
export default Output;
