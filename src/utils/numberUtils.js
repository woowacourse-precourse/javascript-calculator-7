export const isAllNumber = (arr) => {
  return arr.every((item) => !isNaN(item));
};

export const isAllNumberPositive = (arr) => {
  let IS_POSITIVE = arr.every((item) => item >= 0);

  return IS_POSITIVE;
};

export const sumAllNumber = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};
