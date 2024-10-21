export function isSeparatorsValid(separators) {
  for (const separator of separators) {
    if (!isNaN(separator)) return false;
    if (separator === "-" || separator === ".") return false;
  }
  return true;
}

export function isExpressionValid(separator, expression) {
  const expressionArr = expression.split("");
  for (const str of expressionArr) {
    if (!separator.includes(str) && isNaN(str)) return false;
    if (str < 0) return false;
  }
  return true;
}
