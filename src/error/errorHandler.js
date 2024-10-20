import ERROR_MESSAGES from '../constants/errorMessages.js';

/**
 * 주어진 오류 키에 해당하는 오류 메시지를 생성하고 예외를 던진다.
 *
 * @function throwError
 * @param {string} errorKey - ERROR_MESSAGES 오브젝트에서 참조할 오류 메시지의 키
 * @throws {Error} 지정된 키에 해당하는 오류 메시지를 포함한 예외를 던진다.
 */
export default function throwError(errorKey) {
  const errorMessage = `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES[errorKey]}`;
  throw new Error(errorMessage);
}
