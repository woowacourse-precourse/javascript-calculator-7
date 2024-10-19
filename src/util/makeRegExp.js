import { REGEX_SPECIAL_CAHRS } from "../constant/index.js";

export const makeRegExp = (separateArr) => {
  return new RegExp(
    separateArr
      .map((elem) => {
        if (REGEX_SPECIAL_CAHRS.includes(elem)) {
          return "\\" + elem;
        } else {
          return elem;
        }
      })
      .join("|")
  );
};
