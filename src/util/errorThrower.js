//@ts-check
import { ERROR_MESSAGE } from '../constants/errorMessages.js';

/**@param {string} message */
const throwError = (message) => {
  throw new Error(`${ERROR_MESSAGE.PREFIX} ${message}`);
};

export default throwError;
