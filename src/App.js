import { Console } from '@woowacourse/mission-utils';
class App {
  #inputString;

  #resultNumber;
  async run() {
    const INPUT_STRING = await this.userInput(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    this.#inputString = INPUT_STRING;

    await this.printOutput(`결과 : ${this.#resultNumber}`);
  }

  async userInput(content) {
    return await Console.readLineAsync(content);
  }

  async printOutput(content) {
    return await Console.print(content);
  }
}

export default App;
