//@ts-check
import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessages.js';

const outputView = {
  /**@param {number} result */
  printResult(result) {
    this.printMessage(`${GAME_MESSAGE.RESULT} ${result}`);
  },

  /**@param {string} message */
  printMessage(message) {
    Console.print(message);
  },
};

export default outputView;
