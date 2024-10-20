import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constant/message.js';

// 사용자에게 입력을 받는 역할
// 메서드 집합만을 제공하는 정적 객체
const InputView = {
  async readString() {
    return Console.readLineAsync(INPUT_MESSAGE);
  },
};

export default InputView;
