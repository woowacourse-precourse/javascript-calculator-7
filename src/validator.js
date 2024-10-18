import { errorMessage } from './constant.js';

export default class Validator {
  static validateCustomSeparator(input) {
    this.#checkIncludeNewLine(input);
    this.#checkIncludeEmptyString(input);
  }

  static validateUsedSeparator(input, customSeparator) {
    this.#checkUseOtherSeperator(input, customSeparator);
    this.#checkSeperatorConflict(input, customSeparator);
  }

  static validateStartsWith(input) {
    if (this.checkStartWidthDubbleSlash(input)) return;
    if (this.#checkStartWithNumber(input)) return;
    throw new Error(errorMessage.useNumberOrSlash);
  }

  static checkStartWidthDubbleSlash(input) {
    const regExp = /^(\/\/)/;
    return regExp.test(input);
  }

  static #checkStartWithNumber(input) {
    const regExp = /^[1-9]/;
    return regExp.test(input);
  }

  static #checkSeperatorConflict(input, customSeperator) {
    const regExpString = customSeperator
      ? `${customSeperator}{2,}|${customSeperator}[,:]|[,:]{2,}|[,:]${customSeperator}`
      : `,{2,}|:{2,}|,:|:,`;

    const regExp = new RegExp(regExpString);
    if (regExp.test(input)) {
      throw new Error(errorMessage.useSeperatorConflict);
    }
  }

  static #checkIncludeNewLine(input) {
    const newLineRegExp = /\\n/;
    if (!newLineRegExp.test(input)) throw new Error(errorMessage.useNewLine);
  }

  static #checkIncludeEmptyString(input) {
    const splitInput = input.split(/(?:\/\/|\\n)/);
    if (splitInput[1] === '') throw new Error(errorMessage.useCoustomSeparator);
  }

  static #checkUseOtherSeperator(input, customSeparator) {
    const separatorRegExp = new RegExp(
      `${customSeparator ? customSeparator + '|' : ''}[,:]`,
    );
    const splitedInput = input.split(separatorRegExp).join('');

    if (!Number(splitedInput))
      throw new Error(errorMessage.useCustomOrBasicSeparator);
  }
}
