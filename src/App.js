import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async getUserInput() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

      if (userInput === '') throw new Error('[Error]');
      return userInput;
    } catch (error) {
      throw error;
    }
  }

  async run() {
    try {
      const userInput = await this.getUserInput();
      MissionUtils.Console.print(`사용자가 입력한 값 : ${userInput}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
