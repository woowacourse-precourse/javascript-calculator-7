import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = '덧셈할 문자열을 입력해 주세요.\n';

const InputView = {
  async readString() {
    const string = await Console.readLineAsync(INPUT_MESSAGE);

    return string;
  },
};

export default InputView;
