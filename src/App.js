import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const INPUT_MESSAGE = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
    const TRIM_INPUT_MESSAGE = INPUT_MESSAGE.trim();

    if (TRIM_INPUT_MESSAGE === '' || typeof TRIM_INPUT_MESSAGE !== 'string') {
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    }
  }
}

export default App;
