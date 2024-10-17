import { ERROR_MESSAGE, BASIC_MESSAGES } from "../constant/messages.js";
import extractNumbers from "./extractnumber.js";

function validateInput(input) {
  if (typeof input !== "string") {
    const error = new Error(ERROR_MESSAGE.invalidString);
    error.additionalMessage = BASIC_MESSAGES.exitMessage;
    throw error;
  }
  //빈 공백만 포함하는지 확인
  if (input.trim() === "") {
    return false;
  }
  //커스텀 구분자로 시작하는지 확인
  if (input.startsWith("//")) {
    const SEPARATORENDINDEX = input.indexOf("\n");
    if (SEPARATORENDINDEX === -1 || SEPARATORENDINDEX === 2) {
      const error = new Error(ERROR_MESSAGE.invalidCostom);
      error.additionalMessage = BASIC_MESSAGES.exitMessage;
      throw error;
    }

    const SEPARATOR = input.substring(2, SEPARATORENDINDEX);
    //유효하지 않은 구분자 문자인지 확인
    const invalidChars = /[^a-zA-Z0-9,:\n]/;
    if (invalidChars.test(SEPARATOR)) {
      const error = new Error(ERROR_MESSAGE.invalidSeparator);
      error.additionalMessage = BASIC_MESSAGES.exitMessage;
      throw error;
    }
  }

  const numbers = extractNumbers(input);
  for (const num of numbers) {
    if (num < 0) {
      const error = new Error(ERROR_MESSAGE.invalidPositiveNumber);
      error.additionalMessage = BASIC_MESSAGES.exitMessage;
      throw error;
    }
  }
  return true;
}

export default validateInput;
