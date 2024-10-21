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

  invalidIsNumber: (numberArr) => {
    if (numberArr.some((num) => isNaN(num))) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  },

  invalidPositiveNumber: (numberArr) => {
    if (numberArr.some((num) => num <= 0)) {
      throw new Error(ERROR_MESSAGES.POSITIVE_NUMBER);
    }
  },
};

export default inputValidator;
