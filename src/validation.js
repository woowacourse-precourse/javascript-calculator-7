export function isInputValid(separator, expression) {
  const expressionArr = expression.split("").map((val) => val.trim());
  if (expressionArr.every((str) => separator.includes(str) || (!isNaN(str) && Number(str) >= 0))) {
    return true;
  }
  return false;
}
