import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputString = await this.getInputString();
    const result = this.calculate(inputString);
    this.printResult(result);
  }

  static async getInputString() {
    return await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  static printResult(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  static calculate(inputString) {
    const DEFAULT_DELIMITERS = [',', ':'];
    let delimiters = [...DEFAULT_DELIMITERS];

    let newInputString = inputString;

    if (this.checkCustomSplitStringByDelimiter(inputString)) {
      delimiters = this.getMergedDelimiters(inputString, delimiters);
      newInputString = this.getStrippedString(inputString);
    }

    this.isValidString(newInputString, delimiters);

    const stringArray = this.splitStringByDelimiter(newInputString, delimiters);
    const numberArray = this.returnNumbers(stringArray);

    return this.add(numberArray);
  }

  static add(numbers) {
    const initialValue = 0;

    return numbers.reduce((accumulator, number) => accumulator + number, initialValue);
  }

  static splitStringByDelimiter(inputString, delimiters) {
    let currentToken = '';
    const TokenArray = [];

    for (const element of inputString) {
      if (delimiters.includes(element)) {
        TokenArray.push(currentToken);
        currentToken = '';
      } else {
        currentToken += element;
      }
    }

    if (currentToken !== '') {
      TokenArray.push(currentToken);
    }

    return TokenArray;
  }

  static checkCustomSplitStringByDelimiter(inputString) {
    return (inputString[0] === '/' && inputString[1] === '/'
      && inputString[3] === '\\' && inputString[4] === 'n');
  }

  static getMergedDelimiters(inputString, delimiters) {
    const customDelimiter = inputString[2];
    return [...delimiters, customDelimiter];
  }

  static getStrippedString(inputString) {
    return inputString.slice(5);
  }

  static isValidString(inputString, delimiters) {
    for (const element of inputString) {
      const isNotInclude = !delimiters.includes(element);

      if (isNaN(element) && isNotInclude) {
        console.error(`유효하지 않은 입력: ${element}`);
        throw new Error('[ERROR]');
      }
    }
    return true;
  }

  static returnNumbers(inputArray) {
    return inputArray.map(Number);
  }
}

export default App;
