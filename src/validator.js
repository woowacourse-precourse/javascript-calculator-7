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

export function checkeCommaColonConflict(input) {
  let result = false;
  const duplicateComma = /,,+/;
  const duplicateColon = /::+/;
  const commaColonRegExp = /,:/;
  const colonCommaRegExp = /:,/;

  if (duplicateColon.test(input)) result = true;
  if (duplicateComma.test(input)) result = true;
  if (commaColonRegExp.test(input)) result = true;
  if (colonCommaRegExp.test(input)) result = true;

  if (result) throw new Error(errorMessage.useSeperatorConflict);
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

export function checkSeperatorConflict(input) {
  checkeCommaColonConflict(input);

  let splitInput = input.split(/(?:\/\/|\\n)/);
  const customSeperator = splitInput[1];

  const regExpString = `${customSeperator}{2,}|${customSeperator}[,:]|[,:]{2,}|[,:]${customSeperator}`;

  const conflictRegExp = new RegExp(regExpString);

  if (conflictRegExp.test(splitInput.join('')))
    throw new Error(errorMessage.useSeperatorConflict);
}
