import throwError from "../utils/throwError";

// 입력값이 없는 경우
export const emptyInput = (input) => {
  if (!input) throwError("input is not found");
  return input;
};

export const negativeInput = (input) => {
  if (/-\d/.test(input)) throwError("input is nagative number");
  return input;
};
