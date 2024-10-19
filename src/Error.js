class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

export class IncludeZeroError extends ValidationError {
  constructor() {
    super();
    this.name = "IncludeZeroError";
  }
}

export class InvalidSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidSeparatorError";
  }
}

export class InvalidCustomSeparatorError extends ValidationError {
  constructor() {
    super();
    this.name = "InvalidCustomSeparatorError";
  }
}
