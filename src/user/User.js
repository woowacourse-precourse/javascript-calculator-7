//@ts-check
import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessages.js';
import { validateInput } from '../validation/validateInput.js';

class User {
  /**
   * @returns {Promise<string>}
   */
  async readAnswer() {
    //유저가 입력한 숫자 받기
    const input = await Console.readLineAsync(GAME_MESSAGE.START);
    return validateInput(input);
  }

  //추후에 덧셈 계산이 아닌 다른 계산 로직을 위한 유저 입력 값 여기다 추가하면 될 듯.
}

export default User;
