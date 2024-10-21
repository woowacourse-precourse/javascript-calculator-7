import { CUSTOM_DELIMITER } from "../constants/delimiter.js";
import {
  INPUT_CUSTOM_FAULT,
  INPUT_STRING_VALIDATION,
} from "../constants/error.js";
import { isAllNumber, sumAllNumber } from "../utils/numberUtils.js";

export const custom = (str) => {
  const match = str.match(CUSTOM_DELIMITER);
  const delimiter = match[1];
  const numberString = str.slice(match[0].length);

  const numArr = numberString.split(delimiter).map(Number);

  if (!match || !isAllNumber(numArr)) {
    throw new Error(ERROR + INPUT_CUSTOM_FAULT);
  }

  return sumAllNumber(numArr);
};
