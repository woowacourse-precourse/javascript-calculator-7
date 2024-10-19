import ValidationError from "./ValidationError.js";

class InvalidCustomSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidCustomSeparatorError";
    this.message = "[ERROR] 커스텀 구분자는 문자로 입력해주세요.";
  }
}

export default InvalidCustomSeparatorError;
