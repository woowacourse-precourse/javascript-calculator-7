import ValidationError from "./ValidationError";

class IncludeZeroError extends ValidationError {
  constructor() {
    super();
    this.name = "IncludeZeroError";
  }
}

export default IncludeZeroError;
