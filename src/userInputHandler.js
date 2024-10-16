export function sum(arr) {
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

export function getSplitedBySeparator(input, customSeparator) {
  const separatorRegExp = new RegExp(
    `${customSeparator ? customSeparator + '|' : ''}[,:]`,
  );
  return input.split(separatorRegExp);
}

export function getCustomSeparator(input) {
  let splitInput = input.split(/(?:\/\/|\\n)/);
  const customSeparator = splitInput[1];
  return customSeparator;
}

export function getRemovedCustomSeparator(input) {
  return input.split(/\\n/)[1];
}
