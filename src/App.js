import { Console } from '@woowacourse/mission-utils';
import { DEFAULT_SEPARATOR } from './constant.js';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const [customSep, extractedStr] = this.extractCustomSeparator(input);

    const splittedString = this.splitWithSeparator(
      extractedStr,
      DEFAULT_SEPARATOR,
      customSep,
    );

    const sum = this.sumAllString(splittedString);

    Console.print(sum);
  }

  extractCustomSeparator(str) {
    const [first, rest] = str.split('\\n');

    if (first.startsWith('//')) {
      return [first.slice(2), rest];
    }

    return ['', first];
  }

  splitWithSeparator(str, separator, customSep) {
    const allSeparator = separator;

    if (customSep !== '') allSeparator.push(customSep);
    const sepToRegex = new RegExp(allSeparator.join('|'));

    return str.split(sepToRegex);
  }

  checkNumber(num) {
    return !Number.isNaN(num);
  }

  sumAllString(strArr) {
    const numArr = strArr.map((str) => {
      const num = Number(str);
      if (this.checkNumber(num)) return num;
      throw Error('[ERROR] 숫자가 아닌 문자열이 포함되어 있습니다.');
    });

    return numArr.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
