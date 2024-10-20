import handleError from './handleError.js';

const isVaildateNumber = function isVaildateNumberFunc(number) {
  const maxSafeInteger = Number.MAX_SAFE_INTEGER;

  if (Number.isNaN(number) || number > maxSafeInteger) {
    handleError('유효한 숫자가 아닙니다.');
  }
};

export default isVaildateNumber;
