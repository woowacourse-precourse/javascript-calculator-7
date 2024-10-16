import { ERROR_MESSAGE } from "../constant/messages.js";

function validateInput(input) {
  if (typeof input !== "string") {
    throw new Error(ERROR_MESSAGE.invalidString);
  }
  //빈 공백만 포함하는지 확인
  if (input.trim() === "") {
    return false;
  }
  //커스텀 구분자로 시작하는지 확인
  if (input.startsWith("//")) {
    const SEPARATORENDINDEX = input.indexOf("\n");
    if (SEPARATORENDINDEX === -1 || SEPARATORENDINDEX === 2) {
      throw new Error(ERROR_MESSAGE.invalidCostom);
    }

    const SEPARATOR = input.substring(2, SEPARATORENDINDEX);
    //유효하지 않은 구분자 문자인지 확인
    const invalidChars = /[^a-zA-Z0-9,:\n]/;
    if (invalidChars.test(SEPARATOR)) {
      throw new Error(ERROR_MESSAGE.invalidSeparator);
    }
  }
  return true;
}

export default validateInput;
