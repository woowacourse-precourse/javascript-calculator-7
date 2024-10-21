import ERROR_MESSAGES from "../constants/errorMessages.js";

const validateInput = (input) => {
  if (!/[0-9]/.test(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_INPUT);
  }
};

export default validateInput;
