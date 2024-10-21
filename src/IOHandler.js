import { Console } from "@woowacourse/mission-utils";

class IOHandler {
  async input() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const strArr = input.trim().split('');

    return strArr;
  }

  async print(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default IOHandler;