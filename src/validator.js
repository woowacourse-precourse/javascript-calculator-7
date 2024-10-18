import { errorMessage } from './constant.js';

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
    if (this.checkStartWidthDubbleSlash(input)) return;
    if (this.#checkStartWithNumber(input)) return;
    throw new Error(errorMessage.invalidInputFormat);
  }

  static checkStartWidthDubbleSlash(input) {
    const regExp = /^(\/\/)/;
    return regExp.test(input);
  }

  static #checkStartWithNumber(input) {
    const regExp = /^[1-9]/;
    return regExp.test(input);
  }

  static #checkConflictingSeparators(input, customSeperator) {
    const regExpString = customSeperator
      ? `${customSeperator}{2,}|${customSeperator}[,:]|[,:]{2,}|[,:]${customSeperator}`
      : `,{2,}|:{2,}|,:|:,`;

    const regExp = new RegExp(regExpString);
    if (regExp.test(input)) {
      throw new Error(errorMessage.conflictingSeparators);
    }
  }

  static #checkMissingNewLine(input) {
    const newLineRegExp = /\\n/;
    if (!newLineRegExp.test(input))
      throw new Error(errorMessage.missingNewLine);
  }

  static #checkCustomSeparator(input) {
    const splitInput = input.split(/(?:\/\/|\\n)/);
    if (splitInput[1] === '')
      throw new Error(errorMessage.missingCustomSeparator);
    if (splitInput[1] === '.')
      throw new Error(errorMessage.invalidDotForCustomSepartor);
    if (Number(splitInput[1]))
      throw new Error(errorMessage.invalidNumberForCustomSepartor);
  }

  static #checkIncludeZero(input, customSeparator) {
    const separatorRegExp = new RegExp(
      `[${customSeparator ? customSeparator + '|[,:]' : '[,:]'}]0`,
    );

    if (separatorRegExp.test(input)) throw new Error(errorMessage.usePositive);
  }

  static #checkInvalidSeparatorUsage(input, customSeparator) {
    const separatorRegExp = new RegExp(
      `${customSeparator ? customSeparator + '|[,:]' : '[,:]'}`,
    );
    const splitedInput = input.split(separatorRegExp).join('');

    if (!Number(splitedInput))
      throw new Error(errorMessage.invalidSeparatorUsage);
  }
}
