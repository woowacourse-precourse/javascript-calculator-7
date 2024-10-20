import { Console } from '@woowacourse/mission-utils';
import Constants from './Constants.js';
import * as Validator from './validator.js';

async function getUserInput() {
  try {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return input;
  } catch (e) {
    throw new Error(Constants.ERROR_MESSAGE.INVALID_INPUT);
  }
}

class App {
  async run() {
    const input = await getUserInput();

    const targetString = Validator.extractCustomDelimiter(input);
    const parsedString = Validator.parseString(targetString);

    const result = parsedString.reduce((sum, cur) => sum + cur, 0n);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
