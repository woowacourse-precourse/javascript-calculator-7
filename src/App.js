import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const USER_INPUT = (
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    ).trim();

    const DEFAULT_SEPARATOR = /[,:]/;

    const DEFAULT_CACULATOR = (USER_INPUT) => {
      const USER_INPUT_NUMBER = USER_INPUT.split(DEFAULT_SEPARATOR);

      let sum = 0;

      for (let i = 0; i < USER_INPUT_NUMBER.length; i++) {
        sum += parseInt(USER_INPUT_NUMBER[i]);
      }
      return sum;
    };

    Console.print('결과 : ' + DEFAULT_CACULATOR(USER_INPUT));
  }
}

export default App;
