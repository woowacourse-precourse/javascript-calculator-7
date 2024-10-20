export const checkIsPositive = (array) => {
  const result = array.every((element) => {
    if (Number(element) !== NaN) {
      return element > 0;
    } else {
      throw new Error("ERROR: 배열의 요소에 문자가 있습니다.");
    }
  });

  if (!result) {
    throw new Error("ERROR: 배열의 요소에 0 혹은 음수가 있습니다.");
  }
};
