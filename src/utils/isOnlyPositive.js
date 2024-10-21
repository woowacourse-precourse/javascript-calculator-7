import ERROR_MESSAGES from "../constants/errorMessages.js";

const isOnlyPositive = (splitString) => {
  splitString.forEach((num) => {
    if (isNaN(num)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    } else if (num < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }
  });

  return true;
};

export default isOnlyPositive;
