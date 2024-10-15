import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessages.js';

class User {
  async readAnswer() {
    //유저가 입력한 숫자 받기
    const answer = await Console.readLineAsync(GAME_MESSAGE.START);
  }
}

export default User;
