import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const INPUT = await this.userInput();
      const USER = this.userSeparator(INPUT);
      const NUMBERS = this.parseNumbers(USER);
      this.userOutput(NUMBERS);
    } catch (error) {}
  }
}

export default App;
