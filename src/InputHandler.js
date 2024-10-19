import { Console } from "@woowacourse/mission-utils";
import OutputHandler from './OutputHandler.js';

class InputHandler {
  constructor() {
    this.outputHandler = new OutputHandler();
  }

  async readString() {
      const input = await Console.readLineAsync('');
      this.validateEmpty(input);
      return input;
  }

  validateEmpty(input) {
    if (!input.trim()) {
      throw new Error("[ERROR] 빈 문자열은 허용되지 않습니다.");
    }
  }
}

export default InputHandler;