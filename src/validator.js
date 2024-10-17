import { errorMessage } from './constant.js';

export default class Validator {
  validateCustomSeparator(input) {
    this.#checkIncludeNewLine(input);
    this.#checkIncludeEmptyString(input);
  }

  validateUsedSeparator(input, customSeparator) {
    this.#checkUseOtherSeperator(input, customSeparator);
    this.#checkSeperatorConflict(input, customSeparator);
  }

  validateStartsWith(input) {
    if (this.checkStartWidthDubbleSlash(input)) return;
    if (this.#checkStartWithNumber(input)) return;
    throw new Error(errorMessage.useNumberOrSlash);
  }

  checkStartWidthDubbleSlash(input) {
    const regExp = /^(\/\/)/;
    return regExp.test(input);
  }

  #checkStartWithNumber(input) {
    const regExp = /^[1-9]/;
    return regExp.test(input);
  }

  #checkSeperatorConflict(input, customSeperator) {
    const regExpString = customSeperator
      ? `${customSeperator}{2,}|${customSeperator}[,:]|[,:]{2,}|[,:]${customSeperator}`
      : `,{2,}|:{2,}|,:|:,`;

    const regExp = new RegExp(regExpString);
    if (regExp.test(input)) {
      throw new Error(errorMessage.useSeperatorConflict);
    }
  }

  #checkIncludeNewLine(input) {
    const newLineRegExp = /\\n/;
    if (!newLineRegExp.test(input)) throw new Error(errorMessage.useNewLine);
  }

  #checkIncludeEmptyString(input) {
    const splitInput = input.split(/(?:\/\/|\\n)/);
    if (splitInput[1] === '') throw new Error(errorMessage.useCoustomSeparator);
  }

  #checkUseOtherSeperator(input, customSeparator) {
    const separatorRegExp = new RegExp(
      `${customSeparator ? customSeparator + '|' : ''}[,:]`,
    );
    const splitedInput = input.split(separatorRegExp).join('');

    if (!Number(splitedInput))
      throw new Error(errorMessage.useCustomOrBasicSeparator);
  }
}
