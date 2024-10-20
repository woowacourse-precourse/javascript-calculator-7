export const checkIsPositive = (array) => {
  const result = array.every((element) => {
    if (!isNaN(Number(element))) {
      return element > 0;
    } else {
      throw new Error("ERROR: 지정한 구분자가 아닌 문자가 있습니다.");
    }
  });

  if (!result) {
    throw new Error("ERROR: 배열의 요소에 0 혹은 음수가 있습니다.");
  }
};
