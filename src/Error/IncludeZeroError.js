import ValidationError from "./ValidationError.js";
import { ERROR_HEADER, ERROR_BODY } from "../constants/errorMessage.js";

class IncludeZeroError extends ValidationError {
  constructor() {
    super();
    this.name = "IncludeZeroError";
    this.message = `${ERROR_HEADER} ${ERROR_BODY.INCLUDE_ZERO}`;
  }
}

export default IncludeZeroError;
