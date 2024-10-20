export function isValidCharSeparator(seperator) {
  return seperator.length === 1 && isNaN(seperator);
}

export function isValidCustomEndIndex(endIndex) {
  return endIndex !== -1;
}

export function isValidIsNumbers(input) {
  return input.every((number) => !isNaN(parseInt(number)));
}

export function isValidVaildSeparator(input) {
  return input.every((number) => !Number.isNaN(Number(number)));
}

export function isValidNumberRange(input) {
  return input.every((number) => 0 < Number(number));
}
