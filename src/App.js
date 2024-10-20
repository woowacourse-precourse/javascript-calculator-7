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
    inputValidation(this.getInputString());
    this.sumNumbers();
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
    const delimiterRegex = new RegExp(`[${this.#delimiter.join('')}]`);
    const HAS_CUSTOM_DELIMITER = CUSTOM_DELIMITER ? true : false;
    const START_INDEX = HAS_CUSTOM_DELIMITER
      ? this.#inputString.indexOf('\\n') + 2
      : 0;

    this.#inputString = this.#inputString.substring(START_INDEX);
    this.#separatedNumber = this.#inputString
      .split(delimiterRegex)
      .map((num) => Number(num));
  }

  getInputString() {
    return this.#inputString;
  }
  sumNumbers() {
    this.#resultNumber = this.#separatedNumber.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }
}

export default App;
