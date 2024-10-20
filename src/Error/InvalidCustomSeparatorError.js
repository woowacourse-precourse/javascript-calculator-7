import ValidationError from "./ValidationError.js";
import { ERROR_HEADER, ERROR_BODY } from "../constants/errorMessage.js";

class InvalidCustomSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidCustomSeparatorError";
    this.message = `${ERROR_HEADER} ${ERROR_BODY.INVALID_CUSTOM_SEPARATOR}`;
  }
}

export default InvalidCustomSeparatorError;
