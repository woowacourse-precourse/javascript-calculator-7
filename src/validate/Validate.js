import { viewUtils } from "../util/ViewUtil.js";

export const Validator = () => {
  const validateEntireForm = (input) => {
    const entireValidForm = /^(\/\/(\D+)\\n)?\d+(([:,]|\2)\d+)+$/;
    try {
      if (!entireValidForm.test(input)) {
        throw new Error("입력 형식이 올바르지 않습니다.");
      }
    } catch (err) {
      viewUtils.errorMessage(err);
    }
  };

  const validateOutputForm = (output) => {
    try {
      if (isNaN(Number(output))) throw new Error("출력값이 숫자가 아닙니다.");
    } catch (err) {
      viewUtils.errorMessage(err);
    }
  };
  return { validateEntireForm, validateOutputForm };
};
