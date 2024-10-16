export function isStartWithNumber(input) {
  const regExp = /^[1-9]/;
  return regExp.test(input);
}

export function isStartWidthDubbleSlash(input) {
  const regExp = /^(\/\/)/;
  return regExp.test(input);
}

export function checkSeperator(input) {
  if (!Boolean(Number(input.split(/[,:]/).join('')))) {
    throw new Error(errorMessage.useCommaOrColon);
  }
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

export function checkUseOtherSeperator(input) {
  let splitInput = input.split(/(?:\/\/|\\n)/);
  const customSeperator = splitInput[1];

  const basicSeparatorRegExp = /[,:]/;

  splitInput = splitInput.join('').split(basicSeparatorRegExp).join('');
  splitInput = splitInput.split(customSeperator).join('');

  if (!Number(splitInput))
    throw new Error(errorMessage.useCustomOrBasicSeparator);
}
