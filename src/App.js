import { readLineAsync } from './utils/input.js';
import { print } from './utils/output.js';
import Validator from './Validator.js';

class App {
  async run() {
    const input = await readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if (input.trim() === '') {
      print(`결과 : ${0}`);
      return;
    }

    const validator = new Validator(input);
    const numArr = validator.getNumbers();

    const result = numArr.reduce((sum, num) => sum + num, 0);

    print(`결과 : ${result}`);
  }
}

export default App;
