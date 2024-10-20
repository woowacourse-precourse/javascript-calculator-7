import { Console } from '@woowacourse/mission-utils';
import { inputValidation } from './validation.js';
class App {
  #inputString;
  #delimiters;
  #separatedNumber;
  #resultNumber;
  async run() {
    const INPUT_STRING = await this.userInput(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    this.#inputString = INPUT_STRING;
    this.setDelimiter();
    this.separateNumbers();
    inputValidation(this.getInputString(), this.getDelimiter());
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
    const delimiterRegex = new RegExp(`[${this.#delimiters.join('')}]`);
    const basicDelimiter = [',', ':'];
    const HAS_CUSTOM_DELIMITER = this.#delimiters.some(
      (delimiter) => !basicDelimiter.includes(delimiter)
    );

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

  getDelimiter() {
    return this.#delimiters;
  }
  setDelimiter() {
    this.#delimiters = [',', ':'];
    const CUSTOM_DELIMITER = this.#inputString.match(/^\/\/(.)?\\n/)?.[1];
    CUSTOM_DELIMITER ? this.#delimiters.push(CUSTOM_DELIMITER) : '';
  }

  sumNumbers() {
    this.#resultNumber = this.#separatedNumber.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }
}

export default App;
