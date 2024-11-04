import MESSAGES from '../assets/message.js';

const isVaildateNumber = function isVaildateNumberFunc(number) {
  const maxSafeInteger = Number.MAX_SAFE_INTEGER;

  if (Number.isNaN(number) || number > maxSafeInteger) {
    throw new Error(MESSAGES.ERROR.INVALID_NUMBER);
  }
};

export default isVaildateNumber;
