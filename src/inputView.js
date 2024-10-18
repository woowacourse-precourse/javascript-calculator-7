import { Console } from "@woowacourse/mission-utils";

const inputView = {
  USER_INPUT_MESSEAGE: "덧셈할 문자열을 입력해 주세요.\n",

  async readUserInput() {
    const line = await Console.readLineAsync(this.USER_INPUT_MESSEAGE);
    return line;
  },
};

export default inputView;
