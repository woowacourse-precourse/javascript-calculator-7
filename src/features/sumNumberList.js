import { ERROR_CONFIG } from "../config/errorConfig.js";

export const sumNumberList = (numList) => {
  let sum = 0;
  if (numList.length === 0) throw new Error(ERROR_CONFIG.INVALID_VALUE);

  for (let num of numList) {
    if (isNaN(num)) {
      throw new Error(ERROR_CONFIG.INVALID_VALUE);
    }
    sum += num;
  }

  return sum;
};
