import { Console } from "@woowacourse/mission-utils";

class CalculatorView {
  constructor() {
    this.messages = {
      INPUT_PROMPT: "덧셈할 문자열을 입력해 주세요.\n",
      RESULT_PREFIX: "결과 : ",
    };
  }

  async inputView() {
    return await Console.readLineAsync(this.messages.INPUT_PROMPT);
  }

  outputView(result) {
    Console.print(`${this.messages.RESULT_PREFIX}${result}`);
  }

  errorView(error) {
    console.error(error.message);
  }
}

export default CalculatorView;
