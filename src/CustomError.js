class CustomError extends Error {
  static #MESSAGE_PREFIX = "[ERROR] ";

  constructor(message) {
    super(CustomError.#MESSAGE_PREFIX + message);
  }
}

export default CustomError;
