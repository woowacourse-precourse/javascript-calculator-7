import { Console } from "@woowacourse/mission-utils";
import User from "../user/User.js";
import { GAME_MESSAGE } from "../constants/gameMessages.js";

//덧셈기 게임 관리
class Calculator {
  constructor() {
    this.user = new User();
  }

  start() {
    this.printMessage(GAME_MESSAGE.START);
  }

  printMessage(message) {
    Console.print(message);
  }
}

export default Calculator;
