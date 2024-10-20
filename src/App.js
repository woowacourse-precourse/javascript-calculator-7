import { Console } from '@woowacourse/mission-utils';
class App {
  #inputString;
  #delimiter;
  #separatedNumber;
  #resultNumber;
  async run() {
    const INPUT_STRING = await this.userInput(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    this.#inputString = INPUT_STRING;
    this.separateNumbers();
    await this.printOutput(`결과 : ${this.#resultNumber}`);
  }

  async userInput(content) {
    return await Console.readLineAsync(content);
  }

  async printOutput(content) {
    return await Console.print(content);
  }
  separateNumbers() {
    this.#delimiter = [',', ':'];
    const CUSTOM_DELIMITER = this.#inputString.match(/^\/\/(.)?\\n/)?.[1];
    CUSTOM_DELIMITER ? this.#delimiter.push(CUSTOM_DELIMITER) : '';
  }
}

export default App;
