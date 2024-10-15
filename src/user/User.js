import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessages.js';
import Validation from '../validation/Validation.js';

class User {
  async readAnswer() {
    //유저가 입력한 숫자 받기
    const input = await Console.readLineAsync(GAME_MESSAGE.START);
    return Validation.validateInput(input);
  }
}

export default User;
