import { Console } from "@woowacourse/mission-utils";

/**
 * 유저의 입력을 받는 함수
 * 유저 입력에 대한 에러처리는 이 함수를 호출하는 쪽에서 처리한다.
 * @param {string} message
 * @returns {Promise<string>}
 */
const getUserInput = (message) => {
  return Console.readLineAsync(message);
};
export default getUserInput;
