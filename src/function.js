import {
  ZERO,
  COLON,
  SPACE,
  COMMA,
  EMPTY_STRING,
  SLASH,
  ENTER,
  BASIC_ERROR,
  MINUS_ERROR,
} from "./constant.js";

export const addNumber = (numberList) => {
  let sum = ZERO;
  for (let i = 0; i < numberList.length; i++) {
    if (isNaN(parseInt(numberList[i]))) {
      throw new Error(BASIC_ERROR);
    }
    if (parseInt(numberList[i]) < 0) {
      throw new Error(MINUS_ERROR);
    }

    sum += parseInt(numberList[i]);
  }
  return sum;
};

export const removeSeparator = (stringData, customSeparator) => {
  stringData = stringData.replaceAll(COLON, SPACE).replaceAll(COMMA, SPACE);
  if (customSeparator !== EMPTY_STRING)
    stringData = stringData.replaceAll(customSeparator, SPACE);

  return stringData;
};

export const customSeparator = (stringData) => {
  if (stringData[0] !== SLASH || stringData[1] !== SLASH) {
    return [ZERO, EMPTY_STRING]; // 커스텀 구분자가 없다.
  }

  let customSeparator = EMPTY_STRING;
  let i = 2;
  let checkEnd = stringData[i] + stringData[i + 1];

  while (i < stringData.length - 2 && checkEnd !== ENTER) {
    customSeparator = customSeparator + stringData[i];
    i += 1;
    checkEnd = stringData[i] + stringData[i + 1];
  } // string.length - 2까지 가면 에러 처리 필요

  if (i >= stringData.length - 2) {
    throw new Error(BASIC_ERROR);
  }

  return [i + 2, customSeparator];
};
