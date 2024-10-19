import { Console } from '@woowacourse/mission-utils';

export default class View {
  #MESSAGE = Object.freeze({
    INPUT: '덧셈할 문자열을 입력해 주세요.\n',
    OUTPUT: (output) => `결과 : ${output}`,
  });

  async readInputString() {
    const input = await Console.readLineAsync(this.#MESSAGE.INPUT);
    return input;
  }

  printOutputString(output) {
    Console.print(this.#MESSAGE.OUTPUT(output));
  }
}
