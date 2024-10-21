import { ERROR_MESSAGES } from "../constants/messages.js";

const inputValidator = {
  emptyInput: (inputString) => {
    if (inputString === "" || inputString.trim() === "") {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  },

  customDelimiter: (inputString) => {
    const customDelimiterPattern = /^\/\//;
    const customDelimiterMatch = inputString.match(customDelimiterPattern);
    if (customDelimiterMatch && !inputString.includes("\\n")) {
      throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER);
    }
  },

  invalidNumber: (numberArr) => {
    if (numberArr.some((num) => isNaN(num) || num < 0)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  },
};

export default inputValidator;
