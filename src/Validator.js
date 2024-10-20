import { errorMessage } from './constant.js';
import { getCustomSeparator, getSplitedBySeparator } from './util/inputUitl.js';
import {
  getSeparatorConflictPattern,
  getSeparatorPattern,
} from './util/regExpUtil.js';

export default class Validator {
  static validateCustomSeparator(input) {
    this.#checkMissingNewLine(input);
    this.#checkCustomSeparator(input);
  }

  static validateUsedSeparator(input, customSeparator) {
    this.#checkInvalidSeparatorUsage(input, customSeparator);
    this.#checkConflictingSeparators(input, customSeparator);
    this.#checkIncludeZero(input, customSeparator);
  }

  static validateStartsWith(input) {
    if (this.#checkStartWidthDubbleSlash(input)) return;
    if (this.#checkStartWithNumber(input)) return;
    throw new Error(errorMessage.invalidInputFormat);
  }

  static #checkStartWidthDubbleSlash(input) {
    return /^(\/\/)/.test(input);
  }

  static #checkStartWithNumber(input) {
    return /^[1-9]/.test(input);
  }

  static #checkConflictingSeparators(input, customSeperator) {
    if (getSeparatorConflictPattern(customSeperator).test(input)) {
      throw new Error(errorMessage.conflictingSeparators);
    }
  }

  static #checkMissingNewLine(input) {
    if (!/\\n/.test(input)) throw new Error(errorMessage.missingNewLine);
  }

  static #checkCustomSeparator(input) {
    const customSeparator = getCustomSeparator(input);
    if (customSeparator === '')
      throw new Error(errorMessage.missingCustomSeparator);
    if (customSeparator === '.')
      throw new Error(errorMessage.invalidDotForCustomSepartor);
    if (Number(customSeparator))
      throw new Error(errorMessage.invalidNumberForCustomSepartor);
  }

  static #checkIncludeZero(input, customSeparator) {
    // 구분자 다음 바로 0이 오는지 확인하는 패턴
    const separatorRegExp = getSeparatorPattern(customSeparator, 0);
    if (separatorRegExp.test(input)) throw new Error(errorMessage.usePositive);
  }

  static #checkInvalidSeparatorUsage(input, customSeparator) {
    if (input === '') return;
    const splitedInput = Number(
      getSplitedBySeparator(input, customSeparator).join(''),
    );

    if (!splitedInput) throw new Error(errorMessage.invalidSeparatorUsage);
  }
}
