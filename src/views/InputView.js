import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  static async getInput() {
    return MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
  }
}

export default InputView;
