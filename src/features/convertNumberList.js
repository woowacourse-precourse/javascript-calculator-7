import { ERROR_CONFIG } from "../config/errorConfig.js";

export const convertNumberList = (strList) => {
  if (strList.length === 0) throw new Error(ERROR_CONFIG.INVALID_VALUE);

  const NUM_LIST = strList.map((str) => {
    const NUM = Number(str);
    if (isNaN(NUM)) {
      throw new Error(ERROR_CONFIG.INVALID_VALUE);
    }

    return NUM;
  });

  return NUM_LIST;
};
