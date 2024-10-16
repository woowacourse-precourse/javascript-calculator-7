import { Console } from '@woowacourse/mission-utils';
import { DEFAULT_SEPARATOR } from './constant.js';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const [customSep, extractedStr] = this.extractCustomSeparator(input);

    Console.print(customSep);
    Console.print(extractedStr);

    const splittedString = this.splitWithSeparator(input, DEFAULT_SEPARATOR);

    Console.pirint(splittedString);
  }

  extractCustomSeparator(str) {
    const [first, rest] = str.split('\\n');

    if (first.startsWith('//')) {
      return [first.slice(2), rest];
    }

    return ['', first];
  }

  splitWithSeparator(str, separator) {
    const sepToRegex = new RegExp(separator.join('|'));

    return str.split(sepToRegex);
  }
}

export default App;
