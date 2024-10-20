class CustomError extends Error {
  constructor(message, name) {
    super(message);
    this.name = name;
  }
}

export default CustomError;
