import { Console } from '@woowacourse/mission-utils';

async function getUserInput() {
  try {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return input;
  } catch (e) {
    throw new Error('[ERROR] 입력값을 받아오는데 실패했습니다.');
  }
}

class App {
  async run() {
    const input = await getUserInput();
    Console.print(`결과 : ${input}`);
  }
}

export default App;
