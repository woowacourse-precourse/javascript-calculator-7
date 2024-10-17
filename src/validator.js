import { errorMessage } from './constant.js';

export function checkStartWithNumber(input) {
  const regExp = /^[1-9]/;
  return regExp.test(input);
}

export function checkStartWidthDubbleSlash(input) {
  const regExp = /^(\/\/)/;
  return regExp.test(input);
}

export function checkSeperatorConflict(input, customSeperator) {
  const regExpString = customSeperator
    ? `${customSeperator}{2,}|${customSeperator}[,:]|[,:]{2,}|[,:]${customSeperator}`
    : `,{2,}|:{2,}|,:|:,`;

  const regExp = new RegExp(regExpString);
  if (regExp.test(input)) {
    throw new Error(errorMessage.useSeperatorConflict);
  }
}

export function checkIncludeNewLine(input) {
  const newLineRegExp = /\\n/;
  if (!newLineRegExp.test(input)) throw new Error(errorMessage.useNewLine);
}

export function checkIncludeEmptyString(input) {
  const splitInput = input.split(/(?:\/\/|\\n)/);
  if (splitInput[1] === '') throw new Error(errorMessage.useCoustomSeparator);
}

export function checkUseOtherSeperator(input, customSeparator) {
  const separatorRegExp = new RegExp(
    `${customSeparator ? customSeparator + '|' : ''}[,:]`,
  );
  const splitedInput = input.split(separatorRegExp).join('');

  if (!Number(splitedInput))
    throw new Error(errorMessage.useCustomOrBasicSeparator);
}
