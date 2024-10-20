import ERROR_MESSAGES from '../constants/errorMessages.js';

/**
 * 주어진 오류 키에 해당하는 오류 메시지를 생성하고 예외를 던진다.
 *
 * @function throwError
 * @param {string} message - 예외 메시지로 사용할 문자열
 * @throws {Error} '[ERROR]' 접두사와 함께 전달된 메시지를 포함한 예외를 던진다.
 */
export default function throwError(message) {
  const errorMessage = `${ERROR_MESSAGES.PREFIX} ${message}`;
  throw new Error(errorMessage);
}
