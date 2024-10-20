import ERROR_MESSAGES from '../constants/errorMessages.js';

export default function throwError(errorKey) {
  const errorMessage = `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES[errorKey]}`;
  throw new Error(errorMessage);
}
