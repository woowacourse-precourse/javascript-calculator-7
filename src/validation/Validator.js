import { ERROR_MESSAGE } from "../constant/MESSAGE.js";
import { DEFAULT_DELIMITERS } from "../constant/DELIMITER.js";

export default class Validator {
  validateCustomDelimiter(customDelimiter) {
    if (customDelimiter === null) {
      return ;
    }
    if (!isNaN(parseInt(customDelimiter))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_DELIMITER);
    }  
    if (Object.values(DEFAULT_DELIMITERS).includes(customDelimiter)) {
      throw new Error(ERROR_MESSAGE.INVALID_DEFAULT_DELIMITER);
    }  
  }
  validateNumberString(numberString, delimiters) {
    for (let char of numberString) {
      if (!delimiters.includes(char) && isNaN(char)) {
        throw new Error(ERROR_MESSAGE.INVALID_INPUT);
      }
    }
  };
}
