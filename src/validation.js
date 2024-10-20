export function isSeparatorValid(separator) {
  if (!isNaN(separator)) return false;
  return true;
}

export function isExpressionValid(separator, expression) {
  const expressionArr = expression.split("").map((val) => val.trim());
  for (const num of expressionArr) {
    if (!separator.includes(num) && isNaN(num)) return false;
    if (num < 0) return false;
  }
  return true;
}
