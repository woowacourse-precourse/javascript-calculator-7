import { ERROR_PREFIX } from "./constants.js";

class CustomError extends Error {
  constructor(message) {
    throw new Error(`${ERROR_PREFIX}${message}`);
  }
}

export default CustomError;
