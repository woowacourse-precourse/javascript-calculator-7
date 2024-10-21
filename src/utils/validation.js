import { ERROR } from "../constants/error";

export const checkIsPositive = (array) => {
  const result = array.every((element) => {
    if (!isNaN(Number(element))) {
      return element > 0;
    } else {
      throw new Error(ERROR.SPECIFIED_SEPARATOR);
    }
  });

  if (!result) {
    throw new Error(ERROR.NEGATIVE_OR_ZERO_ELEMENT);
  }
};

export const checkIsBlank = (input) => {
  if (input === "") {
    throw new Error(ERROR.BLANK);
  }
  return input;
};

export const checkIsNumericEdge = (input) => {
  if (isNaN(Number(input[0])) || isNaN(Number(input[input.length - 1]))) {
    throw new Error(ERROR.NUMBER_EDGE);
  }
};
