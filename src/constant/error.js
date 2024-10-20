const ERROR_PREFIX = '[ERROR]';

/**
 * @param {string} message 
 * @returns {string}
 */
function getErrorMessage(message) {
  return [ERROR_PREFIX, message].join(' ');
}

export const ERROR_MESSAGE = Object.freeze({
  FAILED_READ_LINE: getErrorMessage('문자를 읽어오는데 실패하였습니다.'),
  INVALID_INPUT: getErrorMessage('유효하지 않은 입력입니다.'),
});
