//@ts-check
import { Console } from '@woowacourse/mission-utils';

class User {
  /**
   * @param {string} value
   * @returns {Promise<string>}
   */
  async readAnswer(value) {
    //유저가 입력한 숫자 받기
    return Console.readLineAsync(value);
  }

  //추후에 다른 목적의 유저 입력 값 여기다 추가하면 될 듯.
}

export default User;
