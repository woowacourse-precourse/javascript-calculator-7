import { Console } from '@woowacourse/mission-utils';

class View {
  async getInput() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
  }

  printResult(result) {
    Console.print('결과 : ' + result);
  }
}

export default View;
