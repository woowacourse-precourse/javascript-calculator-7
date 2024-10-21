export function isValidCharSeparator(seperator) {
  return seperator.length === 1 && isNaN(seperator);
}

export function isValidCustomEndIndex(endIndex) {
  return endIndex !== -1;
}

export function isValidIsOperands(input) {
  return input.every((operand) => !isNaN(parseInt(operand)));
}

export function isValidVaildSeparator(input) {
  return input.every((operand) => !Number.isNaN(Number(operand)));
}

export function isValidOperandRange(input) {
  return input.every((operand) => 0 < Number(operand));
}
