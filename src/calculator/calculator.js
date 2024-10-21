import { CUSTOM_DELIMITER } from "../constants/delimiter.js";
import { basic } from "./basic.js";
import { custom } from "./custom.js";

export const calculator = (str) => {
  if (str === "") {
    return 0;
  }

  if (str.match(CUSTOM_DELIMITER)) {
    return custom(str);
  }

  return basic(str);
};
