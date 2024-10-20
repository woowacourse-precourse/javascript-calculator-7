import handleError from "../utils/errorHandler.js";

function validateNumbers(input) {
  if (/-\d+/.test(input)) {
    handleError("음수는 허용되지 않습니다. 양수만 입력해주세요.");
  }
}

export default validateNumbers;
