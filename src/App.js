import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, DEFAULT_SEPARATOR } from './constant.js';
import { checkIsNumber, checkIsPositive, errorString } from './util.js';

class App {
  async run() {
    const input = await Console.readLineAsync(CONSOLE_MESSAGE.INPUT);

    const [customSep, extractedStr] = this.extractCustomSeparator(input);

    const splittedString = this.splitWithSeparator(
      extractedStr,
      DEFAULT_SEPARATOR,
      customSep,
    );

    if (extractedStr !== '' && splittedString[0] === extractedStr) {
      throw Error(errorString(CONSOLE_MESSAGE.SEPARATOR_ERROR));
    }

    const sum = this.sumAllString(splittedString);

    Console.print(sum);
  }

  extractCustomSeparator(str) {
    const [first, rest] = str.split('\\n');

    if (rest && !first.startsWith('//')) {
      throw Error(errorString(CONSOLE_MESSAGE.SEPARATOR_FORM_ERROR));
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

  checkNumber(num) {
    if (!checkIsNumber(num)) {
      throw Error(errorString(CONSOLE_MESSAGE.NUMBER_ERROR));
    }

    if (!checkIsPositive(num)) {
      throw Error(errorString(CONSOLE_MESSAGE.NUMBER_POSITIVE_ERROR));
    }

    return num;
  }

  sumAllString(strArr) {
    const numArr = strArr.map((str) => this.checkNumber(Number(str)));

    return numArr.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
