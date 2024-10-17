import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const USER_INPUT = (
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    ).trim();

    const DEFAULT_SEPARATOR = /[,:]/;

    const CUSTOM_SYMBOLS = /\/\/(.+)n/;

    const CUSTOM_SEPARATOR = (USER_INPUT) => {
      if (CUSTOM_SYMBOLS.test(USER_INPUT)) {
        const USER_INPUT_SPLIT = USER_INPUT.split('n');
        const USER_CUSTOM_SYMBOLS = USER_INPUT_SPLIT[0];
        const RE_USER_CUSTOM_SYMBOLS = USER_CUSTOM_SYMBOLS.replace('//', '');
        const CUSTOM_SEPARATOR = RE_USER_CUSTOM_SYMBOLS.slice(
          0,
          RE_USER_CUSTOM_SYMBOLS.length - 1
        );

        return CUSTOM_SEPARATOR;
      } else if (!CUSTOM_SYMBOLS.test(USER_INPUT)) {
        throw new Error('[ERROR]');
      }
    };

    const DEFAULT_CACULATOR = (USER_INPUT) => {
      const USER_INPUT_NUMBER = USER_INPUT.split(DEFAULT_SEPARATOR);

      let sum = 0;

      for (let i = 0; i < USER_INPUT_NUMBER.length; i++) {
        sum += parseInt(USER_INPUT_NUMBER[i]);
      }
      return sum;
    };

    // 확인용
    Console.print('결과 : ' + CUSTOM_SEPARATOR(USER_INPUT));
  }
}

export default App;
