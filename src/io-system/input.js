import { Console } from '@woowacourse/mission-utils';
import { TEXT_MESSAGE } from '../constant/message.js';

/**
 * 사용자로부터 입력값을 받아 리턴합니다.
 */

async function Input() {
    return await Console.readLineAsync(TEXT_MESSAGE.INPUT_TEXT);
}
export default Input;
