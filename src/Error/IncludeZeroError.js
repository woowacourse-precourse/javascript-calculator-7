import ValidationError from "./ValidationError";

class IncludeZeroError extends ValidationError {
  constructor() {
    super();
    this.name = "IncludeZeroError";
    this.message = "[ERROR] 입력 값에 0이 포함되어 있습니다.\n 구분자와 양수로 구성된 문자열을 입력해주세요.";
  }
}

export default IncludeZeroError;
