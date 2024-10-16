import { Console } from '@woowacourse/mission-utils';
import { DEFAULT_SEPARATOR } from './constant.js';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const splittedString = App.splitWithSeparator(input, DEFAULT_SEPARATOR);

    Console.print(input);
    Console.print(splittedString);
  }

  static splitWithSeparator(str, separator) {
    const sepToRegex = new RegExp(separator.join('|'));

    return str.split(sepToRegex);
  }
}

export default App;
