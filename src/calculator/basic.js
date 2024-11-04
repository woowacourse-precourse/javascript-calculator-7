import {
  INPUT_BASIC_DELIMITER,
  INPUT_STRING_POSITIVE,
  INPUT_STRING_VALIDATION,
} from "../constants/error.js";
import { ERROR } from "../constants/message.js";
import {
  isAllNumber,
  isAllNumberPositive,
  sumAllNumber,
} from "../utils/numberUtils.js";

export const basic = (str) => {
  const numArr = str.split(/[,:]/).map(Number);

  if (numArr[0] === NaN) {
    throw new Error(ERROR + INPUT_BASIC_DELIMITER);
  }

  if (!isAllNumber(numArr)) {
    throw new Error(ERROR + INPUT_STRING_VALIDATION);
  }

  if (!isAllNumberPositive(numArr)) {
    throw new Error(ERROR + INPUT_STRING_POSITIVE);
  }

  if (isAllNumber(numArr) && isAllNumberPositive(numArr)) {
    return sumAllNumber(numArr);
  }
};
