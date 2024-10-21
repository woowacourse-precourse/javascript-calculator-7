export const checkIsPositive = (array) => {
  const result = array.every((element) => {
    if (!isNaN(Number(element))) {
      return element > 0;
    } else {
      throw new Error("[ERROR]: 지정한 구분자가 아닌 문자가 있습니다.");
    }
  });

  if (!result) {
    throw new Error("[ERROR]: 배열의 요소에 0 혹은 음수가 있습니다.");
  }
};

export const checkIsBlank = (input) => {
  if (input === "") {
    throw new Error("[ERROR]: 입력 값이 공백입니다.");
  }
  return input;
};

export const checkIsNumericEdge = (input) => {
  if (isNaN(Number(input[0])) || isNaN(Number(input[input.length - 1]))) {
    throw new Error("[ERROR]: 배열의 입력 양 끝 값이 숫자가 아닙니다.");
  }
};
