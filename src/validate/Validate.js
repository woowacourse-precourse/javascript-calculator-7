import { errorMessages } from "../ViewConstant/ViewConstants.js";

export const Validator = () => {
  const validateEntireForm = (input) => {
    const entireValidForm = /^(\/\/(\D+)\\n)?\d+(([:,]|\2)\d+)*$/;
    if (!entireValidForm.test(input)) {
      throw new Error(errorMessages.invalidInputForm);
    }
  };

  const validateOutputForm = (output) => {
    if (isNaN(Number(output))) throw new Error(errorMessages.invalidOutputForm);
  };
  return { validateEntireForm, validateOutputForm };
};
