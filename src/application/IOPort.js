import { ERROR_MESSAGE } from '../constant/MESSAGE.js';

export class IOPort {
  static getInput() {
    throw new Error(ERROR_MESSAGE.IMPLEMETED);
  }

  static displayResult() {
    throw new Error(ERROR_MESSAGE.IMPLEMETED);
  }
}
