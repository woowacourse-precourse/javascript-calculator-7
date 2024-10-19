import ValidationError from "./ValidationError";

class InvalidCustomSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidCustomSeparatorError";
  }
}

export default InvalidCustomSeparatorError;
