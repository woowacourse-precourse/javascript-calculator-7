import { Console } from "@woowacourse/mission-utils";

class App {
  inputRequestText() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
  }
  async getInput() {
    const inputValue = await Console.readLineAsync("");
    Console.print(inputValue);
  }
  async run() {
    this.inputRequestText();
    this.getInput();
  }
}

export default App;
