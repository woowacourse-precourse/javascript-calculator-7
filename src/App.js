import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const USER_INPUT = (
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    ).trim();

    const DEFAULT_SEPARATOR = /[,:]/;

    const CUSTOM_SYMBOLS = /\/\/(.+)\\n/;

    const USER_INPUT_SPLIT = USER_INPUT.split('n');

    const CUSTOM_SEPARATOR = (USER_INPUT) => {
      if (CUSTOM_SYMBOLS.test(USER_INPUT)) {
        const USER_CUSTOM_SYMBOLS = USER_INPUT_SPLIT[0];
        const RE_USER_CUSTOM_SYMBOLS = USER_CUSTOM_SYMBOLS.replace('//', '');
        const CUSTOM_SEPARATOR = RE_USER_CUSTOM_SYMBOLS.slice(
          0,
          RE_USER_CUSTOM_SYMBOLS.length - 1
        );
        return CUSTOM_SEPARATOR;
      } else if (!CUSTOM_SYMBOLS.test(USER_INPUT)) {
        throw new Error('[ERROR] 커스텀 구분자 생성 기호가 올바르지 않습니다.');
      }
    };

    const USER_CUSTOM_SEPARATOR = CUSTOM_SEPARATOR(USER_INPUT);

    const SUM_CACULATOR = (USER_INPUT) => {
      let sum = 0;

      for (let i = 0; i < USER_INPUT.length; i++) {
        sum += parseInt(USER_INPUT[i]);
      }

      return sum;
    };

    const CACULATOR = (USER_INPUT) => {
      if (CUSTOM_SYMBOLS.test(USER_INPUT)) {
        const USER_CUSTOM_SYMBOLS = USER_INPUT_SPLIT[1];
        const USER_INPUT_NUMBER = USER_CUSTOM_SYMBOLS.split(
          USER_CUSTOM_SEPARATOR
        );
        const OUTPUT = SUM_CACULATOR(USER_INPUT_NUMBER);

        return OUTPUT;
      } else {
        const USER_INPUT_NUMBER = USER_INPUT.split(DEFAULT_SEPARATOR);

        const OUTPUT = SUM_CACULATOR(USER_INPUT_NUMBER);

        return OUTPUT;
      }
    };

    Console.print('결과 : ' + CACULATOR(USER_INPUT));
  }
}

export default App;
