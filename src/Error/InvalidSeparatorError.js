import ValidationError from "./ValidationError.js";
import { ERROR_HEADER, ERROR_BODY } from "../constants/errorMessage.js";

class InvalidSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidSeparatorError";
    this.message = `${ERROR_HEADER} ${ERROR_BODY.INVALID_SEPARATOR}`;
  }
}

export default InvalidSeparatorError;
