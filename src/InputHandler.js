import { Console } from "@woowacourse/mission-utils";
import OutputHandler from './OutputHandler.js';

class InputHandler {
  constructor() {
    this.OutputHandler = new OutputHandler();
  }

  async readString() {
    try {
      const input = await Console.readLineAsync('');
      this.validateEmpty(input);
      return input;
    } catch (error) {
      this.OutputHandler.printErrorMessage(error.message);
    }
  }

  validateEmpty(input) {
    if (!input.trim()) {
      throw new Error("빈 문자열은 허용되지 않습니다.");
    }
  }
}

export default InputHandler;