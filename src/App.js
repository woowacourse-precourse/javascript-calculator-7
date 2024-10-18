import { Console } from '@woowacourse/mission-utils';
import {
  CONSOLE_MESSAGE,
  DEFAULT_SEPARATOR,
  SPECIAL_CHARACTERS,
} from './constant.js';
import {
  isNumber,
  isPositiveNumber,
  errorString,
  escapeRegex,
} from './util.js';

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

    Console.print(`결과 : ${sum}`);
  }

  extractCustomSeparator(str) {
    const [first, rest] = str.split('\\n');

    if (rest && !first.startsWith('//')) {
      throw Error(errorString(CONSOLE_MESSAGE.SEPARATOR_FORM_ERROR));
    }

    if (first.startsWith('//')) {
      const customSep = first.slice(2);
      if (customSep.length !== 1) {
        throw Error(errorString(CONSOLE_MESSAGE.SEPARATOR_LENGTH_ERROR));
      }

      return [customSep, rest];
    }

    return ['', first];
  }

  splitWithSeparator(str, separator, customSep) {
    if (!str || str.trim() === '') {
      return ['0'];
    }

    const allSeparator = this.validateAndAddSeparator(separator, customSep);

    const sepToRegex = new RegExp(allSeparator.join('|'));

    return str.split(sepToRegex);
  }

  validateAndAddSeparator(separator, customSep) {
    const allSeparator = separator;

    if (allSeparator.includes(customSep)) {
      throw Error(errorString(CONSOLE_MESSAGE.SEPARATOR_DUPLICATE_ERROR));
    }

    if (customSep !== '') {
      const escapedSep = this.escapedSeparator(customSep);
      allSeparator.push(escapedSep);
    }

    if (customSep === ' ') {
      throw Error(errorString(CONSOLE_MESSAGE.SEPARATOR_EMPTY_ERROR));
    }

    return allSeparator;
  }

  escapedSeparator(separator) {
    return SPECIAL_CHARACTERS.includes(separator)
      ? escapeRegex(separator)
      : separator;
  }

  checkNumber(num) {
    if (!isNumber(num)) {
      throw Error(errorString(CONSOLE_MESSAGE.NUMBER_ERROR));
    }

    if (!isPositiveNumber(num)) {
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
