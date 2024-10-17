import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, DEFAULT_SEPARATOR } from './constant.js';
import { checkIsNumber, errorString } from './util.js';

class App {
  async run() {
    const input = await Console.readLineAsync(CONSOLE_MESSAGE.INPUT);

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

    if (rest && !first.startsWith('//')) {
      throw Error(errorString(CONSOLE_MESSAGE.SEPARATOR_ERROR));
    }

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

  sumAllString(strArr) {
    const numArr = strArr.map((str) => {
      const num = Number(str);
      if (checkIsNumber(num)) return num;
      throw Error(errorString(CONSOLE_MESSAGE.NUMBER_ERROR));
    });

    return numArr.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
