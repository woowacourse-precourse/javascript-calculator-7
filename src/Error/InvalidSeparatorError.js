import ValidationError from "./ValidationError";

class InvalidSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidSeparatorError";
    this.message = "[ERROR] 입력 값에 등록되지 않은 구분자가 포함되어 있습니다.\n 문자옆 앞부분의 '//'와 '\\n' 사이에 커스텀 구분자를 입력하거나, 덧셈할 문자열에 구분자와 양수만 포함되도록 입력해주세요.";
  }
}

export default InvalidSeparatorError;
