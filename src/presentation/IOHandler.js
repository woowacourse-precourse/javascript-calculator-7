import { MissionUtils } from '@woowacourse/mission-utils';

const Console = MissionUtils.Console;

export default class IOHandler {
  async getInput() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return input;
  }
  displayResult(result) {
    Console.print(`결과 : ${result}`);
  }
}
