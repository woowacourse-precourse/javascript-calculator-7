import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessages.js';
import { validateInput } from '../validation/validateInput.js';

class User {
  async readAnswer() {
    //유저가 입력한 숫자 받기
    const input = await Console.readLineAsync(GAME_MESSAGE.START);
    return validateInput(input);
  }
}

export default User;
