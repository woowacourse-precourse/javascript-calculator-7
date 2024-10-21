function isNumber(str) {
  if (str == null || str == '') {
    return false;
  }

  return !isNaN(Number(str));
}

function isPositiveNumber(str) {
  const num = Number(str);
  return !isNaN(num) && num > 0;
}

export const validators = {
  isNumber,
  isPositiveNumber,
};
