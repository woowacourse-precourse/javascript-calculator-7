import { Console } from '@woowacourse/mission-utils';

function isInputEmpty(input) {
  if (input === '') {
    return true;
  }
  return false;
}

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }
}

export default App;
