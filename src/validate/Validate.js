import { ERROR_MESSAGES } from "../ViewConstant/ViewConstants.js";

export const Validator = () => {
  const validateEntireForm = (input) => {
    const entireValidForm = /^(\/\/(\D+)\\n)?\d+(([:,]|\2)\d+)*$/;
    if (!entireValidForm.test(input)) {
      throw new Error(ERROR_MESSAGES.INVALID_INPUT_FORM);
    }
  };

  const validateOutputForm = (output) => {
    if (isNaN(Number(output)))
      throw new Error(ERROR_MESSAGES.INVALID_OUTPUT_FORM);
  };
  return { validateEntireForm, validateOutputForm };
};
