import { Console } from '@woowacourse/mission-utils';
import checkSeparator from './checkSeparators.js';

class App {
  async run() {
    const INPUT_MESSAGE = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
    let message = INPUT_MESSAGE.trim();
    let separators = /[,:]/;

    if (message === '') {
      Console.print('결과 : 0');
      return;
    }

    if (typeof message !== 'string') {
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    }

    if (message.startsWith('//')) {
      separators = checkSeparator(message);
      message = message.replace(/\/\/.*?\\n/, '');
    } else {
      const INVALID_SEPARATORS_REGEX = /[^\d,:\n]/;

      if (INVALID_SEPARATORS_REGEX.test(message)) {
        throw new Error('[ERROR] 유효하지 않은 구분자입니다.');
      }
    }

    let numbers = message.split(separators).filter(v => v);

    numbers.forEach(v => {
      const NUM = parseFloat(v);
      if (NUM <= 0 || Number.isNaN(NUM)) {
        throw new Error(
          '[ERROR] 음수, 0 또는 비정상적인 값이 포함되어 있습니다.',
        );
      }
    });

    const ANSWER = numbers.reduce((acc, cur) => acc + +cur, 0);
  }
}

export default App;
