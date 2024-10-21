export class CalculateError extends Error {
  constructor(message) {
    super();
    this.message = "[ERROR] " + message;
  }
}

export class CustomSeparatorError extends CalculateError {
  constructor(message) {
    super(message);
  }
}

export class ValidateError extends CalculateError {
  constructor(message) {
    super(message);
  }
}

export class ParseError extends CalculateError {
  constructor(message) {
    super(message);
  }
}
