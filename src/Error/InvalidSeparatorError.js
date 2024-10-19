import ValidationError from "./ValidationError";

class InvalidSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidSeparatorError";
  }
}

export default InvalidSeparatorError;
