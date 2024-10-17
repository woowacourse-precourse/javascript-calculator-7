import { Console } from '@woowacourse/mission-utils';

class StringInputReader {
  async getInput() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return input;
  }
}

export default StringInputReader;
