import { ERROR_MESSAGE } from './constants/message.js';

export default class Calculator {
  constructor(input) {
    this.inputString = input;
    this.separator = [',', ':'];
  }

  calculate() {
    this.checkAndApplyCustomSeparator();

    if (this.inputString) {
      this.checkInputValidation();
      const nums = this.parseNumber();
      return nums.reduce((a, c) => a + c);
    }

    return 0;
  }

  parseNumber() {
    const separatorReg = this.createSeparatorRegEx();

    const tokens = this.inputString
      .split(separatorReg)
      .map(token => parseFloat(token));

    return tokens;
  }

  checkAndApplyCustomSeparator() {
    const CUSTOM_SEPARATOR_PREFIX = '//';
    const CUSTOM_SEPARATOR_SUFFIX = '\\n';

    // //로 시작하는지 확인
    if (this.inputString.startsWith(CUSTOM_SEPARATOR_PREFIX)) {
      // \n으로 끝나는지 확인
      const separatorEndIndex = this.inputString.indexOf(
        CUSTOM_SEPARATOR_SUFFIX,
      );

      if (separatorEndIndex === -1) {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparator);
      }

      let customSeparator = this.inputString.substring(2, separatorEndIndex);

      if (customSeparator.length === 0) {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparator);
      } else if (customSeparator.length > 1) {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparatorLength);
      }

      if (customSeparator === '.') {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparatorDot);
      } else if (customSeparator === '\\') {
        customSeparator = '\\\\'; // 정규식에서 사용하려면 백슬래시 두 개로 이스케이프 처리
      }

      this.separator.push(customSeparator);
      this.inputString = this.inputString.substring(separatorEndIndex + 2);
    }
  }

  checkInputValidation() {
    this.validateAllowedChars();
    this.validateSeparatorUsage();
  }

  validateAllowedChars() {
    // separator, 숫자 이외의 문자가 포함됐는지 확인
    const validCharactersRegEx = new RegExp(
      `^[0-9.${this.separator.join('')}]*$`,
    );

    if (!validCharactersRegEx.test(this.inputString)) {
      throw new Error(ERROR_MESSAGE.invalidInput);
    }

    // "1..2"와 같이 연속된 소수점 처리
    const hasConsecutiveDots = this.inputString.includes('..');
    if (hasConsecutiveDots) {
      throw new Error(ERROR_MESSAGE.consecutiveDots);
    }
  }

  // separator가 연속적으로 오는지, separator로 끝나지는 않는지 확인
  validateSeparatorUsage() {
    const separatorReg = this.createSeparatorRegEx();
    const tokens = this.inputString.split(separatorReg);

    // separator로 시작하거나 끝나는지 확인
    const isStartingWithSeparator = tokens[0] === '';
    const isEndingWithSeparator = tokens[tokens.length - 1] === '';

    if (isEndingWithSeparator || isStartingWithSeparator) {
      throw new Error(ERROR_MESSAGE.hasBoundarySeparator);
    }

    // separator가 연속적으로 오는지 확인
    const hasConsecutiveSeparators = tokens.filter(v => v === '').length > 0;
    if (hasConsecutiveSeparators) {
      throw new Error(ERROR_MESSAGE.consecutiveSeparators);
    }
  }

  createSeparatorRegEx() {
    // separator 배열을 기반으로 정규식을 생성하는 함수
    return new RegExp(`[${this.separator.join('')}]`);
  }
}
